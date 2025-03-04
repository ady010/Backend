const mongoose = require("mongoose")

const connect = ()=>{(mongoose.connect('mongodb://0.0.0.0/chat'))
    .then(()=>{
        console.log("Conntected to DB")
    })
    .catch(()=>{
        console.log("FAiled To DB")
    })
}

module.exports = connect