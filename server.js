require('dotenv').config();

const express = require('express');
const app = express();
// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
// const db = mongoose.connection;

// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log('Connected to Database'))

// app.use(express.json())

app.get("/", (req, res) => {
    console.log('console here')
    // res.send('hi to user')
    // res.sendStatus(500)
    res.status(500).json({message: "Error"})
})

// const usersRouter = require('./routes/users')

// app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))
