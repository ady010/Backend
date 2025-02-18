const postModel = require("../Models/post.model")
const userModel = require("../Models/user.model")

module.exports.postcreatecontr = async (req, res)=>{
    const { media, caption } = req.body

    const post = await postModel.create({
        media,
        caption
    })

    await userModel.findByIdAndUpdate(req.user._id,{
        $push: {posts : post.id} 
    })

    res.status(201).json(post)
}