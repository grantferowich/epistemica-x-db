const express = require('express');
const router = express.Router();
const Coin = requires('../models/coin');
const Time = requires('../models/time');
const cors = require('cors');
const { request } = require('..');

router.get('/getAll', cors(), async (request, response) => {
    try {
        const coinsArr = await Coin.find();
        response.status(200).json(coinsArr);
    } catch (errorHM) {
        console.error('Error! See the api/coins.js file. Error message: ',errorHM)
        response.status(500).json({error: 'Internal server error.'})
    }
})

router.post('/post', async (request, response) => {
    const coins = request.body;
    await Time.findOneAndUpdate({}, { lastUpdated: Date.now()}, { upsert: true})
    await Coin.insertMany(coins)
})