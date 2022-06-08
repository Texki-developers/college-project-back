const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
userSchema.index({name:1},{collation:{locale:'en',strength:2}})
module.exports = mongoose.model('users',userSchema);