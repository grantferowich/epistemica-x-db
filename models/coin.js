const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  ath: {
    type: Number,
    required: true
  },
  ath_change_percentage: {
    type: Number,
    required: true
  },
  ath_date: {
    type: Date,
    required: true
  },
  atl: {
    type: Number,
    required: true
  },
  atl_change_percentage: {
    type: Number,
    required: true
  },
  atl_date: {
    type: Date,
    required: true
  },
  circulating_supply: {
    type: Number,
    required: true
  },
  current_price: {
    type: Number,
    required: true
  },
  fully_diluted_valuation: {
    type: Number,
    required: true
  },
  high_24h: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  last_updated: {
    type: Date,
    required: true
  },
  low_24h: {
    type: Number,
    required: true
  },
  market_cap: {
    type: Number,
    required: true
  },
  market_cap_change_24h: {
    type: Number,
    required: true
  },
  market_cap_change_percentage_24h: {
    type: Number,
    required: true
  },
  market_cap_rank: {
    type: Number,
    required: true
  },
  max_supply: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price_change_24h: {
    type: Number,
    required: true
  },
  price_change_percentage_24h: {
    type: Number,
    required: true
  },
  roi: {
    type: Object,
    required: false
  },
  symbol: {
    type: String,
    required: true
  },
  total_supply: {
    type: Number,
    required: true
  },
  total_volume: {
    type: Number,
    required: true
  }
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
