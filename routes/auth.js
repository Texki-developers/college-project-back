const express = require('express');
const auth = require('../controllers/auth');
const router = express.Router();
const bcrypt = require('bcrypt')
const authController = require('../controllers/auth');
const generateToken = require('../utils/generateToken');

router.post('/login',(req,res) => {
    authController.login(req.body)
        .then(data => {res.json(data)})
        .catch(err => res.json(err))
})

// ----------------------------SIGNUP
router.post('/signup',async(req,res) => {
    let {name,password} = req.body
    if(name.length < 3 || password.length < 8){
        res.json({status:'error',message: "Username or password doesn't satisfy requirements"})
    }else{
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt)
        authController.signup(name,password)
        .then(data => {
            res.json({status:'ok',message: "Registered Successfully",data:data,token:generateToken({name:name}),userId:data._id})
        })
        .catch(err => {
            res.status(500).json({status:'error',message: 'Registration failed',data:err.toString()})
        })
    }
});

// Check route
router.get('/check/:name',(req,res) => {
    let name = req.params.name;
    let token = generateToken({name:'muhsin'});
    console.log(token);
    authController.isUserExist(name)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

module.exports = router