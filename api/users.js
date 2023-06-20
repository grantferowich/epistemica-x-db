const express = require('express');
const router = express.Router();

const User = require('../models/user');

// handle passwords
const bcrypt = require('bcryptjs');
const saltRoundsInt = 10;

// it works!!! 
// https://epistemica-x-db.vercel.app/api/getAll
// get all users

// every time a router function is touched the logger function is called

router.use(logger)

// post http
// successfully tested May 8, 2023
router.post('/post', async (request, response) => {
    // response.send('Post API');
    const hashedPasswordStr = await bcrypt.hash(request.body.password, saltRoundsInt);
    const data = new User({
        name: request.body.name, 
        email: request.body.email,
        password: hashedPasswordStr
    })

    if (data.name === '' || data.name === null){
        return response.status(401).json({message:'Invalid name.'});
    }

    if (data.email === '' || data.email === null){
        return response.status(401).json({message:'Invalid email.'});
    }

    if (data.password === '' || data.password === null){
        return response.status(401).json({message:'Invalid password.'});
    }

    if (data.password === 'password'){
        return response.status(401).json({message:'Password cannot be password.'});
    }


    // wrap the data to be posted in a try-catch block 
    // in the event name or email data type invalid
    try {
        const dataToSave = await data.save();
        console.log(data)
        response.status(200).json(dataToSave)
    } catch (errorObj) {
        response.status(400).json({message: 'Invalid name, email, and/or password.'})
    }
})


// engineered on May 18, 2023
// successfuilly tested as of May 21, 2023
// g.ferowich@gmail.com
// legend-alpha

// Note on May 23, 2023: Add some type of password validation mechanism.
// If a user does not enter their credentials properly
// display a message saying incorrect username or incorrect password
router.post('/login', logger, async (request, response) => {

    try {
        
        // destructure the request object
        const emailStr = request.body.email;
        const passwordStr = request.body.password;
        
        // search the NoSQL data base 
        const userObj = await User.findOne({email: emailStr});
        if (!userObj){
            return response.status(401).json({message:'Invalid email.'});
        }

        const isPasswordValidToF = await bcrypt.compare(passwordStr, userObj.password);
        
        // invalid password
        if (!isPasswordValidToF){
            return response.status(401).json({message: "Invalid password."});
        }
        
        // valid password
        return response.status(200).json({userObj});
    } catch (errorStr) {
        console.log(errorStr);
        return response.status(500).json({message: errorStr});
    }
})

// getAll http
// successfully tested /getAll on May 8, 2023
router.get('/getAll', async (request, response) => {
    // response.send('Get All API');
    try {
        const dataArr = await User.find()
        return response.json(dataArr)
    } catch (errorStr) {
        response.status(500).json({ message: errorStr.message})
    }
})


// getOne http
// successfully tested /getOne/:id on May 08, 2023
router.get('/getOne/:id', (request, response) => {
    // response.send('Get by ID API');
    response.send(request.params.id);
})

// update http
// successfully tested the patch method May 8, 2023
router.patch('/update/:id', async (request, response) => {
    // response.send('Update by ID API');
    try {
        const idStr = request.params.id;
        const updatedDataHash = request.body;
        const optionsHash = { new: true};
        const resultHash = await User.findByIdAndUpdate(idStr, updatedDataHash, optionsHash);
        
        response.send(resultHash)
    } catch (errorStr) {
        response.sendStatus(400).json({ message: errorStr.message})
    }
})

// Delete By ID http
// successfully tested 
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

// router.post('/', (request, response) => {
//     response.send('Create User')
// })

// route chaining
// router
//     .route('/:id')
//     .get((request, response) => {
//     console.log(request.user)
//     response.send(`Get User With ID ${request.params.id}`)
// })
//     .post((request, response) => {
//     response.send(`Create User ${request.params.id}`)
// })
//     .put((request, response) => {
//     response.send(`Update User With ID ${request.params.id}`)
// })
//     .delete((request, response) => {
//     response.send(`Delete User With ID ${request.params.id}`)
// })


// const users = [{name: "Joseph"}, {name: "Gary" }]
// middleware
// whenever the param is found the program will do some stuff
// router.param("id", (request, response, next, id) => {
//     // console.log(id)
//     request.user = users[id]
//     // call the next piece of middleware
//     next()
// })

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
// async function getUser(request, response, next){
//     try {
//         let user = await User.findById(request.param.id)
//     } catch (err){
//         return response.status(500).json({message: err.message})
//     }
//     response.user = user
// }

// only expect to use next with middleware
// middleware which sits between the server and the route handlers
function logger(request, response, next) {
    console.log(request.originalUrl)
    next()
}

// app.listen(3000)
module.exports = router