const express = require('express');
const router = express.Router();
// to build
const Basket = require('../models/basket');
// const bodyParser = require('body-parser')
router.use(logger);

// post a basket
// engineered on May 26, 2023
router.post('/post', async (request, response) => {
    console.log(request.body)
    const basketData = new Basket({
        basketNameStr: null,
        user_IDStr: null,
        indexDateStr: null,
        initialBasketValueInt: 0,
        asset1HM: {
            asset1NameStr: null,
            asset1IndexPriceInt: 0,
            asset1QuantityInt: 0,
            asset1WeightInt: 0,
            asset1APIKeyStr: null
        },
        asset2HM: {
            asset2NameStr: null,
            asset2IndexPriceInt: 0,
            asset2QuantityInt: 0,
            asset2WeightInt: 0,
            asset2APIKeyStr: null
        },
        asset3HM: {
            asset3NameStr: null,
            asset3IndexPriceInt: 0,
            asset3QuantityInt: 0,
            asset3WeightInt: 0,
            asset3APIKeyStr: null
        },
        asset4HM: {
            asset4NameStr: null,
            asset4IndexPriceInt: 0,
            asset4QuantityInt: 0,
            asset4WeightInt: 0,
            asset4APIKeyStr: null
        },
        asset5HM: {
            asset5NameStr: null,
            asset5IndexPriceInt: 0,
            asset5QuantityInt: 0,
            asset5WeightInt: 0,
            asset5APIKeyStr: null
        }

    })

    try { 
        const basketDataToSave = basketData.save();
        console.log(basketData)
        response.status(200).json(basketDataToSave)
    } catch (errorObj) {
        response.status(400).json({message: errorObj.message})
    }
})
//  router.use((request, response) => {
    
//     bodyParser.urlencoded({extended: false})
//     console.log(bodyParser)
//     next();
//  })

// getAll baskets
router.get('/getAll', async (request, response) => {
    try {
        const basketDataArr = await Basket.find();
        return response.json(basketDataArr)
    } catch (errorStr) {
        response.status(500).json({ message: errorStr.message})
    }
})

// get a basket
router.get('/getOne/:id', (request, response) => {
    // response.send('Get by ID API');
    response.send(request.params.id);
})

// Delete a basket
router.delete('/delete/:id', async (request, response) => {
    // response.send('Delete by ID API')
    try {
        const idStr = request.params.id;
        const resultHash = await User.findByIdAndDelete(idStr);
        response.send(`The following info was deleted: ${resultHash}`);
    } catch (errorStr) {
        response.sendStatus(500).json({message: errorStr})
    }
})

function logger(request, response, next) {
    console.log(request.originalUrl)
    next()
}

module.exports = router