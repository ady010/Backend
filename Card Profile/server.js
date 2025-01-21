const app = require("./src/app")
const connect = require("./src/DB/db")

connect()

app.listen(3000, ()=>{
    console.log("Server is running");
})