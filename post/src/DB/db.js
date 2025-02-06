const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to Database")
    })
    .catch(()=>{
        console.log("Failed")
    })
}

module.exports = connect