const express = require("express")
const app = express()
const router = require("./Routes/index.route")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set("view engine", "ejs")
app.set("views", "./src/views")


app.use("/", router)


module.exports = app