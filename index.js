if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config();
}
require('dotenv').config();
// constants
const User = require('./models/user.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoStr = process.env.DATABASE_URL;
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
mongoose.connect(mongoStr, { useNewUrlParser: true}, {useMongoClient: true})
// initialize db object
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Mongoose Database'));
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
// ensure the page can render what is located in the views dir
app.set("view engine", "ejs");
// make sure the view is rendered
app.get("/", (req, res) => {
    res.render("index");
})
app.listen(3000, () => console.log('Server Started'));
module.exports = app;