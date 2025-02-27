const mongoose = require("mongoose")
require('dotenv').config()

const connect = ()=>{mongoose.connect('mongodb://0.0.0.0/practnew')
    .then(()=>{
        console.log("Connected Database")  
    })
    .catch((err)=>{
        console.log("Failed Database",err);
    })
}

module.exports = connect