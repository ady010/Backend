 const mongoose = require("mongoose")

 const userSchema = mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    age:{
        type: String
    } 
 })

 module.exports = UserModel = mongoose.model("user", userSchema)

