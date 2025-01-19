const express = require("express")
const app = express()

const routes = require("./Routes/index.routes")
app.use("/", routes)


module.exports = app