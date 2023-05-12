if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

require('dotenv').config();
const User = require('./models/model.js')
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const mongoStr = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongoStr, { useNewUrlParser: true})
const db = mongoose.connection;


db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Mongoose Database'));

// app.use(express.json());
app.use(express.json());

const whitelistArr = ['http://localhost:3000', 'http://localhost:3001/signup', 'http://localhost:3001/signup', 'http://localhost:3001', 'https://epistemica-x.vercel.app/'];

const corsOptionsHM = {
    origin: function (originStr, callback) {
        if (!originStr || whitelistArr.indexOf(originStr) !== -1){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}


app.use(cors(corsOptionsHM))
app.use((requestHM, responseHM, next) =>{
    responseHM.header('Access-Control-Allow-Origin', 'http://localhost:3000', 'http://localhost:3001', 'https://epistemica-x.vercel.app/');
    responseHM.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    responseHM.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Type, X-Requested-With');
    next();
})
const usersRouter = require('./api/users.js')

// mount the router, /users is the parent for everything in the userRouters
app.use('/api', usersRouter)
// ensure the page can render what is located in the views dir
app.set("view engine", "ejs")

// make sure the view is rendered
app.get("/", (req, res) => {
    res.render("index");
    // res.send('hi to user')
    // res.sendStatus(500)
    // res.download('server.js')
    // res.status(500).json({message: "Error"})
})

app.listen(3000, () => console.log('Server Started'));

module.exports = app;