const mongoose = require("mongoose")
const config = require("../config/config")


const connect =()=>{ (mongoose.connect('mongodb://0.0.0.0/insta2'))
    .then(()=>{
        console.log("Connected to database");
    })
    .catch(()=>{
        console.log("Failed to connect");
    })
}

module.exports = connect