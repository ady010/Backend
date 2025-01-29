const app = require("./src/app")
const db = require("./src/DB/db")


db();

app.listen(3000, ()=>{
    console.log("Server is running");
})