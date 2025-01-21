const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    age:{
        type: String
    },
    bio:{
        type: String
    },
    img:{
        type: String
    }
})

module.exports = mongoose.model("user", userSchema)