const jwt = require("jsonwebtoken");
const postModel = require("../Models/post.model");

module.exports.indexController = (req, res)=>{
     res.render("index")
}

module.exports.feedController = async (req, res)=>{

    try{
    const token = req.cookies.token
    const decoded = jwt.verify(token, process.env.JWT_URL)
    console.log(decoded);
    const posts = await postModel.find({})
    res.render("feed",{username:decoded.username, posts})
    }catch{
        res.status(401).json({
            message:"Please Login"
        })
    }
}

module.exports.postController = (req, res)=>{
    res.render("post")
}

module.exports.createpostController = async (req,res)=>{

    const {Pimg, caption} = req.body

    const user = await postModel.create({

        Pimg,
        caption
    })
    res.redirect("/feed")
}

