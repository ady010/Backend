const postModel = require("../Models/post.model")
const userModel = require("../Models/user.model")

module.exports.indexController = (req, res)=>{
    res.render("index")
}

module.exports.createUser = async (req, res)=>{
    const { name, email, bio, img } = req.body

    const newUser = await userModel.create({
        name,
        email,
        bio,
        img
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