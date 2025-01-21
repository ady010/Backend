const express = require("express")
const app = express()
const indexRoutes = require("./routes/index.routes")

app.use("/", indexRoutes)
app.set("view engine", "ejs")
app.set("views", "./src/views")

module.exports = app