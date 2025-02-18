const postModel = require("../Models/post.model")

module.exports.feedContr = async (req, res)=>{

    const post = await postModel.find({})

    res.status(200).json(post)
}