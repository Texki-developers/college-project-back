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

router.get('/category',async(req,res)=>{
    try {
        const response = await workerModal.find({},'category')
        res.send(response)
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

router.get("/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const response = await workerModal.find({_id:id})
        res.send(response)
    } catch (error) {
        res.send("error")
    }
})



module.exports =router