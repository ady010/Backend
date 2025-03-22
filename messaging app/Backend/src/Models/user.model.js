const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require("../Config/config")

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

userSchema.methods.generateToken = function (){
    return jwt.sign(
        {
            id:this._id,
            username: this.username,
            email: this.email
        },
        config.KEY
    )
}







  
const userModel = mongoose.model("user", userSchema)

module.exports = userModel