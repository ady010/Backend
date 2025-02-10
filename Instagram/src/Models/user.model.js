const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        minlength: [3, "Atleast 3"],
        maxlength: [50, "Atleast 50"]
    },
    email:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        minlength: [3, "Atleast 3"],
        maxlength: [50, "Atleast 50"]
    },
    progimg:{
        type:String,
        default:"https://plus.unsplash.com/premium_photo-1738090992292-877836f39759?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    passwaord:{
        type:String
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel