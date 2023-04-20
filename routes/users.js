const express = require('express')
const user = require('../models/user')
const router = express.Router()
const User = require('../models/User')

// get all subscribers
router.get('/', async (request, response) =>{
    try {
        const users = await User.find();
        response.json(users)
    } catch (err){
        response.status(500).json({message: err.message})
    }
})

// getting one 
router.get('/:id', getUser, (request, response) => {
    response.send(response.user.name)
})

router.post()

router.patch()

router.delete()

async function getUser(request, response, next){
    try {
        user = await User.findById(request.param.id)
    } catch (err){
        return response.status(500).json({message: err.message})
    }
}