const userModel = require("../Models/user.model")
// const model = require("../Models/user.model")
// const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports.regController = (req, res)=>{
    res.render("register")
}

module.exports.createUser = async (req, res)=>{
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
        name,
        email,
        password : hashedPassword,
    })
 res.redirect("show")
}

module.exports.showUser = async (req, res)=>{
    const getData = await userModel.find()
    res.render("show", {getData})
}

//loginn page

module.exports.loginUser = (req, res)=>{
    res.render("login")
}

module.exports.loginuserCont = async (req, res)=>{

    try{
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
            console.log("Email not found");
            
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if(!isMatched){
            console.log("Password incorrect");        
        }
        res.redirect("show");
    }
    catch(err){
        console.log(err.message);     
    }
}