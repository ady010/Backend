const jwt = require("jsonwebtoken");
const { KEY } = require("../config/config")
const userModel = require("../Models/users.models")


module.exports.authUser = async (req, res, next) => {  
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    
    if(!token){return res.status(400).json({ message: "Unauthorized" });}

    const decoded = jwt.verify(token, KEY);
    // console.log(decoded);
    
    if(!decoded){return res.status(400).json({ message: "Unauthorized"})}

    const user = await userModel.findOne({ _id: decoded.id });
    if(!user){return res.status(400).json({message:"User not found"})}
    // console.log(user);
    
    req.user = {id:user._id}

    next();
  } catch (err) {
    res.status(400).json({ message: "Unauthorized" });
  }
};


