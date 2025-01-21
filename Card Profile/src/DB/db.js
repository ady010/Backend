const mongoose = require("mongoose")



const connect = () =>{
    mongoose.connect("mongodb://0.0.0.0/userrr")
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports = connect