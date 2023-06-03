const express = require('express');
const router = express.Router();
const Time = require('../models/time')

router.get('/time', (request, response) => {
    Time.findOne({}, {}, {sort: { lastUpdate: -1 }})
    .then(time => {
        response.json(time)
    })
    .catch(error => {
        console.error('Error retrieving lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})

router.post('/time', (request, response) => {
    const newTime = new Time();
    newTime.save()
    .then(() => {
        response.send('New lastUpdate was successfully added.');
    })
    .catch(error => {
        console.error('Error adding new lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})

module.exports = router;