const express = require("express")
const app = express()
const userRoute = require("./routes/user.routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/users",userRoute)

module.exports = app