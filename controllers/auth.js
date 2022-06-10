const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
module.exports = {
    signup: (name,password) => {
        return new Promise(async(resolve,reject) => {
            const user = new User({
                name: name,
                password: password
            })
            try{
                const check = await user.save()
                console.log(check);
                resolve(check)
            }catch(err){
                reject(err)
            }
            
        })
    },

    login: (body) => {
        return new Promise(async(resolve,reject) => {
            let {name,password} = body;
            const data = await User.find({name: name})
            console.log(data);
            if(data[0]){
                bcrypt.compare(password,data[0].password,(err,res)=>{
                    if(err){
                        reject({status:'error',message: err.toString})
                    }
                    if(res){
                        resolve({status:'ok',message:'Login success',token:generateToken({name:name}),userId:data[0]._id})
                    }else{
                        reject({status:'error',message:"Password not match"})
                    }
                })
            }
        })
    },

    isUserExist : (name) => {
        return new Promise(async(resolve,reject) => {
            const user = await User.find({name:name}).collation({locale:'en',strength:2})
            console.log(user);
            if(user[0]){
                resolve({status:'ok'})
            }else{
                reject({status:'error'})
            }
        })
    }
}