const express = require('express');
const router = express.Router();
// Basket is importing the schema specified in models/basket
const Basket = require('../models/basket');

router.use(logger);

// post a basket
// engineered on May 26, 2023
router.post('/post', async (request, response) => {
    console.log(request.body)


    const basketData = new Basket({
        basketNameStr: request.body.basketNameStr,
        user_IDStr: request.body.user_IDStr,
        indexDateStr: request.body.indexDateStr,
        initialBasketValueInt: request.body.initialBasketValueInt,
        asset1HM: {
            asset1NameStr: request.body.asset1HM.asset1NameStr,
            asset1IndexPriceInt: request.body.asset1HM.asset1IndexPriceInt,
            asset1QuantityInt: request.body.asset1HM.asset1QuantityInt,
            asset1WeightInt: request.body.asset1HM.asset1WeightInt,
            asset1APIKeyStr: request.body.asset1HM.asset1APIKeyStr
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