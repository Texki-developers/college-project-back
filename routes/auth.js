const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.send("This is login")
})
router.get('/signup',(req,res) => {
    res.send("This is signup")
})
router.post('/signup',(req,res)=>{
    res.send(req.body); 
    console.log(req.body);
})
module.exports = router