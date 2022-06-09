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



module.exports =router