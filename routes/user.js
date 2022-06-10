const express = require('express')
const router = express()
const jwt = require('jsonwebtoken')
const worker = require('../modals/workers');
const machine = require('../modals/mechine');
const { ObjectId } = require('mongodb');
const authenticateToken = require('../middlewares/authenticateToken');


/** 
 * body{
 *  userId
 * }
 */
router.get('/machine',authenticateToken,(req,res) => {
    let userId = req.body.userId;
    machine.find({_id:ObjectId(userId)}).then(res => {
        res.send(200).json(res)
    }).catch(err => {
        res.send(500).json(err);
    })

})

/** 
 * body{
 *  userId
 * }
 */
router.get('/works',authenticateToken,(req,res) => {
    let userId = req.body.userId;
    worker.find({_id:ObjectId(userId)}).then(res => {
        res.send(200).json(res)
    }).catch(err => {
        res.send(500).json(err);
    })
})

module.exports = router;