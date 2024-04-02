const express = require('express');
const router = express.Router();
const Coin = require('../models/coin');
const Time = require('../models/time');
const cors = require('cors');
const Redis = require('ioredis');
// const redisClient = Redis.createClient({
//   url: process.env.REDIS_URI
// })
const redisClient = new Redis(process.env.REDIS_URI)
// const redisPort = redisClient.options.port;

// Log the Redis port
// console.log('Redis Port:', redisPort);

router.use(express.json());
router.get('/getAll', cors(), async (request, response) => {
    try {
        const coinsArr = await Coin.find();
        response.status(200).json(coinsArr);
    } catch (errorHM) {
        console.error('Error! See the api/coins.js file. Error message: ', errorHM)
        response.status(500).json({error: 'Internal server error.'})
    }
})
router.post('/post', async (request, response) => {
    try {
        // isolate 250 coins from api call
        const coins = request.body;
        redisClient.set("250", JSON.stringify(coins)).then(console.log("cache hit! set key 250."))
        console.log("Coins were added to the Redis cache.")
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
})
router.get('/get250', async (req, res) => {
    try {
      redisClient.get('250', async (error, data) => {
        if (error) {
          console.log('console logging....')
          console.log('process.env', process.env.REDIS_URI)
          console.error(error)
        }
        if (data !== null){
          console.log('Cache hit');
          return res.json(JSON.parse(data));
        } else {
          console.log('Cache miss');
          const coins = await Coin.find()
          .sort({ createdAt: -1 })
          .limit(250);
          redisClient.set("250", JSON.stringify(coins));
          console.log("Coins were added to the Redis cache.")
          res.json(coins);
        }
      })
    } catch (error) {
      console.error('Error retrieving coins:', error);
      res.status(500).send('An error occurred.');
    }
});
router.delete('/delete-all', async (request, response) => {
  try {
    await Coin.deleteMany();
    response.json({message: 'All coins have been deleted.'});
  } catch (error) {
    console.error('Error deleting the coins:', error);
    response.status(500).send('An error occured with the /delete-all request.');
  }
})
module.exports = router;