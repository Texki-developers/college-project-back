const mongoose = require('mongoose')
const schema = mongoose.Schema(
    {
        name:String,
        rent:Number,
        category:String,
        description:String,
        location:String,
        userId:String,
        phone:Number
    },
    {
        timestamps:true
    }
)

const modal = mongoose.model('worker',schema)

module.exports = modal