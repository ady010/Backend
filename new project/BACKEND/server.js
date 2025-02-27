const app = require('./src/app')
const db = require("./src/DB/db")

db()




app.listen(3000, () => {
    console.log("server is running on port ")
})
