const express = require('express')
const app = express()

const routes = require("./routes/index.routes")
app.use('/',routes)

module.exports = app 