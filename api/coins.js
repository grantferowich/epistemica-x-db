const express = require('express');
const router = express.Router();
const Coin = require('../models/coin');
const Time = require('../models/time');
const cors = require('cors');
import { createClient } from 'redis';

const redisClient = createClient({
    password: '<password>',
    socket: {
        host: 'redis-11407.c8.us-east-1-4.ec2.cloud.redislabs.com',
        port: 11407
    }
});



router.use(express.json());
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
    try {
        // isolate 250 coins from api call
        const coins = request.body;
        await redisClient.connect();
        await redisClient.set('coins', coins)
        // post to the Time endpoint 
        await Time.findOneAndUpdate({}, { lastUpdated: Date.now()}, { upsert: true});
        // post to the Coin endpoint
        await Coin.insertMany(coins)
        .then(() => {
            console.log('Coins were added to the database.');
            response.status(200).send('Coins were added successfully.')
        }).catch(error => {
            console.error('Error adding coins to the database:', error)
            response.status(500).send('An error occurred.')
        })
    } catch (errorHM) {
        console.log('Request Body', request.body);
        response.status(400).json(console.log('Error!', errorHM));
    }  
    await redisClient.disconnect()
})

router.get('/get250', async (req, res) => {
    try {
      const coins = await Coin.find()
        .sort({ createdAt: -1 })
        .limit(250);
  
      res.json(coins);
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).send('An error occurred.');
    }
  });

module.exports = router;