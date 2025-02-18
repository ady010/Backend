const express = require("express")
const app = express()
const Router = require("../src/Routes/users.routes")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/users", Router)

module.exports = app