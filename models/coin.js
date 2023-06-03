const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    id: String,
    symbol: String,
    name: String,
    image: String,
    current_price: Number,
})

module.exports = mongoose.model('Coin', coinSchema);