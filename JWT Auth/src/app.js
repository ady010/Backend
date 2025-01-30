const express = require("express")
const app = express()
const router = require("../src/Routes/index.route")
const userRouter = require("../src/Routes/user.route")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router)
app.use("/users", userRouter)



module.exports = app