const express = require("express")
const indexRoutes = require("./Routes/index.routes")
const app = express()

app.use("/", indexRoutes)

module.exports = app