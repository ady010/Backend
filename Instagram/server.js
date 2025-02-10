const config = require("./src/config/config")
const app = require("./src/app")
const connect = require("./src/DB/db")


connect()

app.listen(config.PORT,()=>{
    console.log("Server running")
})