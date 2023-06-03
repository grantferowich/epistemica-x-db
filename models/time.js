const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    lastUpdatedDate: {
        type: Date,
        default: Date.now()
    }
})

const Time = mongoose.model('Time', timeSchema);
module.exports = Time;