const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0/Routings")
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Failed",err);
    
})
module.exports = mongoose