const express = require('express')
// const user = require('../models/user')
const router = express.Router()
// const User = require('../models/User')
const bcrypt = require('bcryptjs')

// get all users
// router.get('/', async (request, response) =>{
//     console.log('here')
//     // try {
//     //     const users = await User.find();
//     //     response.json(users)
//     // } catch (err){
//     //     response.status(500).json({message: err.message})
//     // }
// })


router.get('/', (request, response) => {
    response.send('User List')
})

// /new is a static route
router.get('/new', (request, response) => {
    response.send('User New Form')
})

router.post('/', (request, response) => {
    response.send('Create User')
})

// route chaining
router
    .route('/:id')
    .get((request, response) => {
    response.send(`Get User With ID ${request.params.id}`)
})
    .post((request, response) => {
    response.send(`Create User ${request.params.id}`)
})
    .put((request, response) => {
    response.send(`Update User With ID ${request.params.id}`)
})
    .delete((request, response) => {
    response.send(`Delete User With ID ${request.params.id}`)
})

// dynamic parameters: starts with a colon
// router.get('/:id', (request, response) =>{
//     // request.params.id
//     response.send(`Get User With ID ${request.params.id}`)
// })

// router.put('/:id', (request, response) =>{
//     // request.params.id
//     response.send(`Update User With ID ${request.params.id}`)
// })

// router.delete('/:id', (request, response) => {
//     response.send(`Delete User With ID ${request.params.id}`)
// })

// get, put and delete all accept the same dynamic route (:id)
// the acceptance of the same dynamic route inspires the pattern router.route


// getting one 
// router.get('/:id', getUser, (request, response) => {
//     response.send(response.user.name)
// })

// add a user to the database
// router.post('/', async (request, response) => {
//     const {name, password } = request.body;
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)
    
//     const user = new User({
//         name,
//         password: hashedPassword
//     });

//     try {
//         const savedUser = await user.save()
//         response.send(savedUser)
//     } catch (error) {
//         response.status(400).send(error)
//     }
// })

// router.patch()

// router.delete()

// middleware
async function getUser(request, response, next){
    try {
        user = await User.findById(request.param.id)
    } catch (err){
        return response.status(500).json({message: err.message})
    }
    response.user = user
}

// app.listen(3000)
module.exports = router