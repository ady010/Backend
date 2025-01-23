const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0/pract")
    .then(()=>{
        console.log("Connectd to database");
    })
    .catch(()=>{
        console.log("Failed to connect");
    })
module.exports = mongoose