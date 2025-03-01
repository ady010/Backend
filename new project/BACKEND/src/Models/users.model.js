const mongoose = require("mongoose")
const { use } = require("../Routes/routes")

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel