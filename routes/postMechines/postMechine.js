const express = require("express")
const mechineModal = require('../../modals/mechine')
const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        const data = await mechineModal.find({})
        console.log(data);
        res.json(data)
    } catch (error) {
        
    }
})

router.post("/create", async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
      const response = await mechineModal.create(data);
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  });

router.get("/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const response = await mechineModal.find({_id:id})
        res.send(response)
    } catch (error) {
        res.send("error")
    }
})


module.exports =router