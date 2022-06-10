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
router.get('/ad',authenticateToken,(req,res) => {
    let userId = req.body.userId;
    machine.find({_id:ObjectId(userId)}).then(res => {
        worker.find({_id:ObjectId(userId)}).then(response => {
            res.send(200).json({
                ...res,
                ...response
            })
        }).catch(err => {
            res.send(500).json(err);
        })
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
    
})

module.exports = router;