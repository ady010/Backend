require("dotenv").config()
const app = require("./src/app")
const db = require("./DB/db")

db()

app.listen(3000, ()=>{
    console.log("Server is running");
})