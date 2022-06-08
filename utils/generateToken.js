const jsonwebtoken = require("jsonwebtoken")
const {TOKEN_SECRET} = process.env

module.exports = (body) => {
    return jsonwebtoken.sign(body,TOKEN_SECRET,{expiresIn: '1800s'});
}