const mongoose = require('mongoose')
const schema = mongoose.Schema(
    {
        name:String,
        rent:Number,
        description:String,
        userId:Number,
        location:String,
        phone:Number
    },
    {
        timestamps:true
    }
)

const modal = mongoose.model('mechine',schema)

module.exports = modal