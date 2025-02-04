const jwt = require("jsonwebtoken")
const model = require("../Models/user.model")

module.exports.indexController = (req, res)=>{
    res.send("Index")
}


module.exports.feedController = (req, res)=>{
    try{

    const token = req.cookies.token
    const decoded = jwt.verify(token , process.env.JWT_URL)
    console.log(decoded);
    
    res.render("feed",{username:decoded.user})

    }catch{
        res.status(401).json({
            message: "Error"
        })
    }
}