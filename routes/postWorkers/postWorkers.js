const express = require("express")
const router = express.Router()
const workerModal = require("../../modals/workers")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.'+ file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
  })
  
const upload = multer({storage: storage})

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

router.post("/create",upload.single('image'), async (req, res) => {
    const data = req.body;
    console.log({data})
    try {
      const response = await workerModal.create({
        ...data,
        image: `http://localhost:5000/uploads/${req.file?.filename}`
    });
      res.json(response);
    } catch (error) {
        console.log({error});
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

router.delete('/work/:id',async (req,res) => {
    const {id} = req.params
    try{
        const response = await workerModal.deleteOne({_id:id})
        res.send(response)
    }catch(err){
        res.send("error")
    }
})



module.exports =router