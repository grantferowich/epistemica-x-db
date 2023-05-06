const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true, 
        type: String
    }
    // createdAt: {
    //     type: Date,
    //     default: () => new Date()
    // },
    // updatedAt: Date,
})

module.exports = mongoose.model('Data', dataSchema)