const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  ath: {
    type: Number,
    required: false
  },
  ath_change_percentage: {
    type: Number,
    required: false
  },
  ath_date: {
    type: Date,
    required: false
  },
  atl: {
    type: Number,
    required: false
  },
  atl_change_percentage: {
    type: Number,
    required: false
  },
  atl_date: {
    type: Date,
    required: false
  },
  circulating_supply: {
    type: Number,
    required: false
  },
  current_price: {
    type: Number,
    required: false
  },
  fully_diluted_valuation: {
    type: Number,
    required: false,
  },
  high_24h: {
    type: Number,
    required: false,
  },
  id: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false,
  },
  last_updated: {
    type: Date,
    required: false, 
  },
  low_24h: {
    type: Number,
    required: false, 
  },
  market_cap: {
    type: Number,
    required: false, 
  },
  market_cap_change_24h: {
    type: Number,
    required: false,
  },
  market_cap_change_percentage_24h: {
    type: Number,
    required: false,
  },
  market_cap_rank: {
    type: Number,
    required: false,
  },
  max_supply: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true
  },
  price_change_24h: {
    type: Number,
    required: false, 
  },
  price_change_percentage_24h: {
    type: Number,
    required: false, 
  },
  roi: {
      times: {
        type: Number,
        default: 0, 
        required: false
      },
      currency: {
        type: String,
        default: 'btc',
        required: false
      },
      percentage: {
        type: Number,
        default: 0,
        required: false
      }
  },
  symbol: {
    type: String,
    required: false
  },
  total_supply: {
    type: Number,
    required: false,
  },
  total_volume: {
    type: Number,
    required: false,
  }
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
