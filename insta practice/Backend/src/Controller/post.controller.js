const postModel = require("../Models/post.model")
const userModel = require("../Models/users.models")


module.exports.postController = async (req,res)=>{
    
    try{ 
        const {media, caption} = req.body
        
        if( !media || !caption){
            return res.status(400).json({message:"Please add post details"})
        }
        
        const post = await postModel.create({
            media,
            caption,
            createdBy: req.user._id
        })

        console.log(req.user.id);
        
        
        await userModel.findByIdAndUpdate(req.user.id,{
            $push: {posts : post._id}
        })

        res.status(200).json({message: post})
    }catch{
        res.status(400).json({message: error.message})
    }
}