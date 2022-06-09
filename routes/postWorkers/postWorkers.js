const express = require("express")
const router = express.Router()
const workerModal = require("../../modals/workers")


router.get('/',async(req,res)=>{
    try {
        const response = await workerModal.find({})
        res.json(response)
    } catch (error) {
        
    }
})

router.post("/create", async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
      const response = await workerModal.create(data);
      res.json(response);
    } catch (error) {
      res.send(error);
    }
  });



module.exports =router