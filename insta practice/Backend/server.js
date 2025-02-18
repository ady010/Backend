require('dotenv').config()
const app = require("../Backend/src/app")
const DB = require("../Backend/src/DB/db")
const config = require("./src/config/config")

DB()

app.listen(config.PORT, ()=>{
    console.log("Server is running")
})