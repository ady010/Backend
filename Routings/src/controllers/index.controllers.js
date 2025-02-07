const userModel = require("../models/user.model")

const indexController = (req, res)=>{
    res.send('Helllo from controller')
}


const userCreate = async (req, res) =>{
    const {username, email, password} = req.query  
a
    const newUser = new userModel({
        username, 
        email,
        password
    })

    await newUser.save()
    res.send("Done")
}

module.exports = {indexController, userCreate};