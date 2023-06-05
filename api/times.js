const express = require('express');
const router = express.Router();
const Time = require('../models/time')

router.get('/getAll', (request, response) => {
    const times = Time.find()
    .then(time => {
        console.log('GET request was successful.')
        response.json(times)
    })
    .catch(error => {
        console.error('Error retrieving lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})

router.get('/get', (request, response) => {
    Time.findOne({}, {}, {sort: { lastUpdate: -1 }})
    .then(time => {
        console.log('GET request was successful.')
        response.json(time)
    })
    .catch(error => {
        console.error('Error retrieving lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})

router.post('/post', (request, response) => {
    const newTime = new Time();
    newTime.save()
    .then(() => {
        response.send('New lastUpdate was successfully added:', newTime);
    })
    .catch(error => {
        console.error('Error adding new lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})





module.exports = router;