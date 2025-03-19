const express = require("express")
const app = express()
const router = require("./Routes/index.routes")

app.use("/home", router)

module.exports = app