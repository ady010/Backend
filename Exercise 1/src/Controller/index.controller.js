const model = require("../Models/index.model")
module.exports.indexController = ((req, res)=>{
    res.render("index")
})

module.exports.createController = async (req, res)=>{
    const  {name, email, age, bio, img} = req.body
    const newUser = await model.create({
        name,
        email,
        age,
        bio,
        img
    })
    console.log(newUser);
    res.redirect("/users")
}

module.exports.showController = async (req, res)=>{
    const getData = await model.find()
    res.render("card", {getData})
}

module.exports.getUser = async (req, res)=>{

    const name = req.params.userID
    const alluser = await model.findOne({
        _id: name
    })
    res.send(alluser)
    // res.redirect("/users/")
}



