const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect()
    .then(()=>{
        console.log("Connected Database")  
    })
    .catch((err)=>{
        console.log("Failed Database",err);
    })
}

module.exports = connect