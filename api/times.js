const express = require('express');
const router = express.Router();
const Time = require('../models/time')
router.get('/get', (request, response) => {
    Time.findOne({}, {}, {sort: { lastUpdateDate: 1 }})
    .then(time => {
        console.log('GET request was successful.')
        response.json(time)
    })
    .catch(error => {
        console.error('Error retrieving lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})

router.get('/last-record', (req, res) => {
    Time.countDocuments()
      .then(count => {
        Time.findOne().skip(count - 1)
          .then(lastRecord => {
            res.json(lastRecord);
          })
          .catch(error => {
            console.error('Error retrieving last record:', error);
            res.status(500).send('An error occurred.');
          });
      })
      .catch(error => {
        console.error('Error counting documents:', error);
        res.status(500).send('An error occurred.');
      });
  });
  


router.post('/post', (request, response) => {
    const newTime = new Time();
    newTime.save()
    .then(() => {
        console.log('New lastUpdateDate was successfully added')
        response.send(newTime);
    })
    .catch(error => {
        console.error('Error adding new lastUpdate:', error);
        response.status(500).send('An error occurred.')
    })
})


router.get('/all', async (request, response) => {
    try {
        const times = await Time.find()
        console.log('GET request was successful.')
        response.status(200).json(times)
    } catch (error) {
        console.error('Error retrieving lastUpdate:', error);
        response.status(500).send('An error occurred.')
    }
})



module.exports = router;