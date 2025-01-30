const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required']
    },
    email:{
        type: String,
        required: [true, 'Email is required']
    },
    password:{
        type: String,
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel