const mongoose = require('mongoose')
const schema = mongoose.Schema(
    {
        name:String,
        rent:Number,
        description:String,
        userId:String,
        location:String,
        phone:Number
    },
    {
        timestamps:true
    }
)

const modal = mongoose.model('mechine',schema)

module.exports = modal