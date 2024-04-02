require('dotenv').config();
// constants
const User = require('./models/user.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoStr = process.env.DATABASE_URL;
const compression = require('compression');
const axios = require('axios');
const cron = require('node-cron');
const Coin = require('./models/coin');
const Redis = require('ioredis');
const redisClient = new Redis(process.env.REDIS_URI);
const fs = require('fs');

redisClient.on("connect", () => {
    console.log("Connected to Redis Cache.")
})

// compression 
app.use(compression({
    // Specify Brotli as the compression algorithm
    algorithm: 'brotli',
    // Optional: Set the compression level (0-11, default: 6)
    level: 6
}));

// middleware
const cors = require('cors');
const options = {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    bufferMaxEntries: 0
}
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true}, {useMongoClient: true})
// initialize db object
const db = mongoose.connection;
db.on('error', (error) => {
    // console.log('mongoStr', process.env)
    console.log(error)
});
db.once('open', () => console.log('Connected to Mongoose Database.'));
const coinGeckoAPIStr = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h'
const completeAPICall = async () => {
    const responseHM = await axios.get(coinGeckoAPIStr);
    try {
        const apiDataArr = (responseHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
        redisClient.set("250", JSON.stringify(apiDataArr))
        redisClient.expire("250", 3600)
        await Coin.insertMany(apiDataArr);
        console.log('Redis cache was updated.')
        console.log('API call was successfull.')
    } catch (errorHM) {
        console.error('API call failed: ', errorHM)
    }
}

const writeToFile = () => {
    let currentTime = new Date();
    const currentDate = currentTime.toLocaleDateString();
    const hoursInt = currentTime.getHours();
    const minutesInt = currentTime.getMinutes();
    const secondsInt = currentTime.getSeconds();
    const millisecondsInt = currentTime.getMilliseconds();
    const logMessageStr =  `\nCron task ran at ${currentDate}:${hoursInt}:${minutesInt}:${secondsInt}:${millisecondsInt}.`;
    fs.appendFile('logs/cron.md', logMessageStr, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('wrote to the file.');
        }
    })
}
// schedule the api call to run every hour
cron.schedule('0 * * * *', async () => {
    try {
        console.log("Cron job executed.")
        completeAPICall();
        writeToFile();
    } catch (error){
        console.log("Error in the cron job.")
        console.error("Error in cron job:", error)
    }
    
})
// app.use(express.json());
app.use(express.json({ limit: '10mb'}));
app.use((requestHM, responseHM, next) =>{
    responseHM.header('Access-Control-Allow-Origin', '*');
    responseHM.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    responseHM.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Type, X-Requested-With');
    next();
});

const usersRouter = require('./api/users.js');
const basketsRouter = require('./api/baskets.js');
const coinsRouter = require('./api/coins.js');
const timesRouter = require('./api/times.js')
// mount the router, /users is the parent for everything in the userRouters
app.use('/api/user', usersRouter);
app.use('/api/basket', basketsRouter);
app.use('/api/coin', coinsRouter);
app.use('/api/time', timesRouter);
// app.use('/api/hello')
// ensure the page can render what is located in the views dir
app.set("view engine", "ejs");
// make sure the view is rendered
app.get("/", (req, res) => {
    try {
        res.render("index");
    } catch(error){
        console.log("Error rendering index", error)
    }
})
app.listen(3000, () => console.log('Server Started on port 3000.'));
module.exports = app;