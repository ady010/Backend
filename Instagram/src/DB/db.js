const config  = require("../config/config")
const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect(config.MONGODB)
    .then(()=>{
        console.log("Connected Database")  
    })
    .catch((err)=>{
        console.log("Failed Database",err);
    })
}

module.exports = connect