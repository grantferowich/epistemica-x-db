const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    updatedAt: Date,

})

mongoose.model('User', userSchema)