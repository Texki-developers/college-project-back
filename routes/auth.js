const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.send("This is login")
})
router.get('/signup',(req,res) => {
    res.send("This is signup")
})

module.exports = router