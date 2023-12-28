const users = require('../Models/userSchema')
// const jwt = require('jsonwebtoken')

//register
exports.register = (req,res)=>{
   console.log('inside register controller function');
   const {username,email,password} = req.body
   console.log(`${username},${email}, ${password}`);
   res.status(200).json("Register request received")
}