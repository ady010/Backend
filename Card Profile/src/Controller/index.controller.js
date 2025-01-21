const userModel = require("../Models/user.model")

module.exports.indexController = (req, res)=>{
    res.render("index")
}
module.exports.createController = async (req, res)=>{
    const {name, email, age, bio, img} = req.query
    const newUser = await userModel.create({
        name,
        email,
        age,
        bio,
        img
    })
    console.log(newUser);
    
    res.redirect("/users")
}
module.exports.showUsers = async (req, res)=>{
    const users = await userModel.find()
    console.log(users)
    res.render("users",{users})
}