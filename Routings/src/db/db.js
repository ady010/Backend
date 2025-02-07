const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0/Routings")
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log("connection failed",err);
})

module.exports = mongoose 