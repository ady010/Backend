const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    media:{
        type:String
    },
    caption:{
        type:String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }

})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel