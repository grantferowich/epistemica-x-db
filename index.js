if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

require('dotenv').config();
const User = require('./models/model.js')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoStr = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongoStr, { useNewUrlParser: true})
const db = mongoose.connection;


db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Mongoose Database'))

// app.use(express.json())

// ensure the page can render what is located in the views dir
app.set("view engine", "ejs")

// make sure the view is rendered
app.get("/", (req, res) => {
    console.log('console here')
    res.render("index")
    // res.send('hi to user')
    // res.sendStatus(500)
    // res.download('server.js')
    // res.status(500).json({message: "Error"})
})


app.use(express.json())
const usersRouter = require('./api/users.js')

// mount the router, /users is the parent for everything in the userRouters
app.use('/api', usersRouter)

app.listen(3000, () => console.log('Server Started'));

module.exports = app;