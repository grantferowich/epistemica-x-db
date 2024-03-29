const express = require('express');
const router = express.Router();
// Basket is importing the schema specified in models/basket
const Basket = require('../models/basket');
const cors = require('cors')

router.use(logger)

// post a basket
// engineered on May 26, 2023
router.post('/post', cors(), async (request, response) => {

    const basketData = new Basket({
        basketNameStr: request.body.basketNameStr,
        user_IDStr: request.body.user_IDStr,
        indexDateStr: request.body.indexDateStr,
        initialBasketValueInt: request.body.initialBasketValueInt,
        presentBasketValueInt: request.body.presentBasketValueInt,
        percentReturnInt: request.body.percentReturnInt,
        asset1HM: {
            asset1NameStr: request.body.asset1HM.asset1NameStr,
            asset1IndexPriceInt: request.body.asset1HM.asset1IndexPriceInt,
            asset1QuantityInt: request.body.asset1HM.asset1QuantityInt,
            asset1PresentPriceInt: request.body.asset1HM.asset1PresentPriceInt,
            asset1InitialPositionValueInt: request.body.asset1HM.asset1InitialPositionValueInt,
            asset1PresentPositionValueInt: request.body.asset1HM.asset1PresentPositionValueInt,
            asset1WeightInt: request.body.asset1HM.asset1WeightInt,
            asset1APIKeyStr: request.body.asset1HM.asset1APIKeyStr,
            asset1LoSStr: request.body.asset1HM.asset1LoSStr
        },
        asset2HM: {
            asset2NameStr: request.body.asset2HM.asset2NameStr,
            asset2IndexPriceInt: request.body.asset2HM.asset2IndexPriceInt,
            asset2QuantityInt: request.body.asset2HM.asset2QuantityInt,
            asset2PresentPriceInt: request.body.asset2HM.asset2PresentPriceInt,
            asset2InitialPositionValueInt: request.body.asset2HM.asset2InitialPositionValueInt,
            asset2PresentPositionValueInt: request.body.asset2HM.asset2PresentPositionValueInt,
            asset2WeightInt: request.body.asset2HM.asset2WeightInt,
            asset2APIKeyStr: request.body.asset2HM.asset2APIKeyStr,
            asset2LoSStr: request.body.asset2HM.asset2LoSStr
        },
        asset3HM: {
            asset3NameStr: request.body.asset3HM.asset3NameStr,
            asset3IndexPriceInt: request.body.asset3HM.asset3IndexPriceInt,
            asset3QuantityInt: request.body.asset3HM.asset3QuantityInt,
            asset3PresentPriceInt: request.body.asset3HM.asset3PresentPriceInt,
            asset3InitialPositionValueInt: request.body.asset3HM.asset3InitialPositionValueInt,
            asset3PresentPositionValueInt: request.body.asset3HM.asset3PresentPositionValueInt,
            asset3WeightInt: request.body.asset3HM.asset3WeightInt,
            asset3APIKeyStr: request.body.asset3HM.asset3APIKeyStr,
            asset3LoSStr: request.body.asset3HM.asset3LoSStr
        },
        asset4HM: {
            asset4NameStr: request.body.asset4HM.asset4NameStr,
            asset4IndexPriceInt: request.body.asset4HM.asset4IndexPriceInt,
            asset4QuantityInt: request.body.asset4HM.asset4QuantityInt,
            asset4PresentPriceInt: request.body.asset4HM.asset4PresentPriceInt,
            asset4InitialPositionValueInt: request.body.asset4HM.asset4InitialPositionValueInt,
            asset4PresentPositionValueInt: request.body.asset4HM.asset4PresentPositionValueInt,
            asset4WeightInt: request.body.asset4HM.asset4WeightInt,
            asset4APIKeyStr: request.body.asset4HM.asset4APIKeyStr,
            asset4LoSStr: request.body.asset4HM.asset4LoSStr
        },
        asset5HM: {
            asset5NameStr: request.body.asset5HM.asset5NameStr,
            asset5IndexPriceInt: request.body.asset5HM.asset5IndexPriceInt,
            asset5QuantityInt: request.body.asset5HM.asset5QuantityInt,
            asset5PresentPriceInt: request.body.asset5HM.asset5PresentPriceInt,
            asset5InitialPositionValueInt: request.body.asset5HM.asset5InitialPositionValueInt,
            asset5PresentPositionValueInt: request.body.asset5HM.asset5PresentPositionValueInt,
            asset5WeightInt: request.body.asset5HM.asset5WeightInt,
            asset5APIKeyStr: request.body.asset5HM.asset5APIKeyStr,
            asset5LoSStr: request.body.asset5HM.asset5LoSStr
        }
    })

    try { 
        const basketDataToSave = await basketData.save();
        let basketNameStr = request.body.basketNameStr
        console.log('Request body: ', request.body)
        console.log(basketData)
        response.status(200).json(basketDataToSave)
    } catch (errorObj) {
        response.status(400).json(console.log('Error!', errorObj.message))
        console.log('Request Body', request.body)
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
        console.log('LOGGING IDSTR', idStr)
        const resultHash = await Basket.findByIdAndDelete(idStr);
        response.send(`The following info was deleted: ${resultHash}`);
    } catch (errorStr) {
        response.sendStatus(500).json({message: errorStr})
    }
})

router.delete('/deleteAll', async (request, response) => {
    try {
      await Basket.deleteMany(); // Delete all documents in the "Basket" collection
      response.json({ message: 'All baskets deleted successfully.' });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
});



function logger(request, response, next) {
    console.log(request.originalUrl)
    next()
}

module.exports = router