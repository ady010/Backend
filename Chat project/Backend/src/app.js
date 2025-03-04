const express = require("express")
const app = express()
const router = require("../src/Routes/project.routes")

app.use(express.json({

    limit: '100mb'
}))
app.use(express.urlencoded({extended: true, limit:"10mb"}))

app.use("/v1/api/project", router)


module.exports = app