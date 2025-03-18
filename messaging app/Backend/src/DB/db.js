const config = require("../Config/config");
const mongoose = require("mongoose");


const connect = ()=>{mongoose.connect(config.MONGO)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((err)=>{
        console.log("Failed to connect DB",err);
    })
}

module.exports = connect