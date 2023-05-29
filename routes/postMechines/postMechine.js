const express = require("express")
const mechineModal = require('../../modals/mechine')
const multer = require("multer")
const router = express.Router()

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
        const data = await mechineModal.find({})
        console.log(data);
        res.json(data)
    } catch (error) {
        
    }
})

router.post("/create", upload.single('image'), async (req, res) => {
    const data = req.body;
    try {
      const response = await mechineModal.create({
        ...data,
        image: `http://localhost:5000/uploads/${req.file?.filename}`
      });
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
router.delete('/machine/:id',async (req,res) => {
  const {id} = req.params
  try{
      const response = await mechineModal.deleteOne({_id:id})
      res.send(response)
  }catch(err){
      res.send("error")
  }
})

module.exports =router

