const mongoose = require("mongoose")


const connect = ()=> {mongoose.connect("mongodb://0.0.0.0/auth")
     .then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Connection failed",err); 
})}

module.exports = connect;