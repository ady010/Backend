const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    img:{
        type: String
    },
    email:{
        type: String
    },
    bio:{
        type: String
    },
    age:{
        type: String
    }
})

module.exports = UserModel = mongoose.model("user", userSchema)
