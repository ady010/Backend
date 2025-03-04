const app = require("../Backend/src/app")
const db = require("../Backend/src/DB/db")
db()

app.listen(3000,()=>{
    console.log("server is running")
})