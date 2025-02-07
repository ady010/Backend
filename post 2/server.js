require("dotenv").config()
const app = require("./src/app")
const DB = require("./src/DB/db")

DB()


app.listen(3000,()=>{
    console.log("Server Running")
})