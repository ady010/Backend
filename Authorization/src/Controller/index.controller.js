const postModel = require("../Models/post.model")
const userModel = require("../Models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


module.exports.indexController = (req, res)=>{
    res.render("login")
}

module.exports.createUser = async (req, res)=>{
    const { name, email, password, bio, img } = req.body

    const hash = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({
        name,
        email,
        password: hash,
        bio,
        img,
    })
    // console.log(newUser);
    res.redirect("/home")
}



//////////post creation///////////////////////////////

module.exports.createController = (req, res)=>{
    res.render("post")
}

module.exports.createPost = async (req, res)=>{

    const { img, caption} = req.body
    const newPost = await postModel.create({
        img,
        caption
    })
    // console.log(newPost);
    
    res.redirect("/home")
}

module.exports.showPost = async (req, res)=>{
    const post = await postModel.find()
    const name = await userModel.find()
    res.render("home" , {post,name} )
}

module.exports.incLike = async (req, res)=>{
    const {id} = req.body 
    const like = await postModel.findOneAndUpdate(
        {_id : id},
        {$inc : {like: 1}},
        {new: true})

        res.redirect("/home")
}

module.exports.Delete = async (req, res)=>{
    const {id} = req.body
    const del = await postModel.findOneAndDelete(
        {_id : id},
    )
    res.redirect("/home")
}

//Login page

module.exports.loginController = async (req,res)=>{
    res.render("login")
}

module.exports.userLogincontroller = async (req,res)=>{

    const {email, password} = req.body;
    const user = await userModel.findOne({ email: email })

    // console.log(email, user);
    
    if(await bcrypt.compare(password, user.password))
        res.redirect("/home")
    else{
        res.redirect("/login")
    }
}


