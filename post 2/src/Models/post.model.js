const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Pimg:{
        type:String
    },
    caption:{
        type:String
    }
    
})

const postModel = mongoose.model("user", userSchema)

module.exports = postModel