const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
})


const postModel = mongoose.model('post', userSchema)
module.exports = postModel