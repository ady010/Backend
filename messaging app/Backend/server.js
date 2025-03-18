const config = require("./src/Config/config")
const app = require("./src/app")
const DB = require("./src/DB/db")
DB()

app.listen(config.PORT, ()=>{
    console.log("Server running")
})