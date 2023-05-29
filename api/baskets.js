const express = require('express');
const router = express.Router();
// Basket is importing the schema specified in models/basket
const Basket = require('../models/basket');

router.use(logger)

// post a basket
// engineered on May 26, 2023
router.post('/post', async (request, response) => {

    

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
            asset2NameStr: request.body.asset2HM.asset2NameStr,
            asset2IndexPriceInt: request.body.asset2HM.asset2IndexPriceInt,
            asset2QuantityInt: request.body.asset2HM.asset2QuantityInt,
            asset2WeightInt: request.body.asset2HM.asset2WeightInt,
            asset2APIKeyStr: request.body.asset2HM.asset2APIKeyStr
        },
        asset3HM: {
            asset3NameStr: request.body.asset3HM.asset3NameStr,
            asset3IndexPriceInt: request.body.asset3HM.asset3IndexPriceInt,
            asset3QuantityInt: request.body.asset3HM.asset3QuantityInt,
            asset3WeightInt: request.body.asset3HM.asset3WeightInt,
            asset3APIKeyStr: request.body.asset3HM.asset3APIKeyStr
        },
        asset4HM: {
            asset4NameStr: request.body.asset4HM.asset4NameStr,
            asset4IndexPriceInt: request.body.asset4HM.asset4IndexPriceInt,
            asset4QuantityInt: request.body.asset4HM.asset4QuantityInt,
            asset4WeightInt: request.body.asset4HM.asset4WeightInt,
            asset4APIKeyStr: request.body.asset4HM.asset4APIKeyStr
        },
        asset5HM: {
            asset5NameStr: request.body.asset5HM.asset5NameStr,
            asset5IndexPriceInt: request.body.asset5HM.asset5IndexPriceInt,
            asset5QuantityInt: request.body.asset5HM.asset5QuantityInt,
            asset5WeightInt: request.body.asset5HM.asset5WeightInt,
            asset5APIKeyStr: request.body.asset5HM.asset5APIKeyStr
        }
    })

    try { 
        const basketDataToSave = basketData.save();
        let basketNameStr = request.body.basketNameStr
    console.log('Basket Name Str', basketNameStr);
    console.log('Request body: ', request.body)
        console.log(basketData)
        response.status(200).json(basketDataToSave)
    } catch (errorObj) {
        response.status(400).json({message: errorObj.message})
    }
    next()
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