const userModel = require("../Models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { json } = require("express")

module.exports.userContr = (req, res)=>{
    res.send("hello user")
}


module.exports.createContr = async (req, res)=>{
    const {username, email, password} = req.body

    const hashed = await bcrypt.hash(password, 10)

    const user = await userModel.create({

        username,
        email,
        password: hashed

    })
    res.status(200).json({
        user,
        message: "user created"
    })
}
module.exports.loginContr = async(req, res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email:email})
    if(!user){
        res.status(401).json({
            message : "Enter Valid email or password"
        })
    }
    const ismatched = bcrypt.compare(password, user.password)
    if(!ismatched){
        res.status(401).json({
            message: "Enter valid email or Password"
        })
    }

    const token = jwt.sign(
        {
            _id: user._id,
        },
        process.env.JWT_URL
    )
    res.status(200).json({
        message:"Login succes",token
    })
}
 
module.exports.profileContr = async (req, res)=>{

    try{

        const token = req.headers.authorization.split(" ")[1]
        const _id = jwt.verify(token, process.env.JWT_URL)
        const user = await userModel.findOne({_id: _id})
        
        res.status(200).json({
            user, 
        })
    }
    catch{
        res.status(401).json({
            message: "UNNSuccesss"
        })
    }
}
