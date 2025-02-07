const express = require("express")
const app = express()
const Router = require("../src/Routes/index.routes")
const userRouter = require("../src/Routes/user.routes")
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use("/", Router)
app.use("/users", userRouter)

module.exports = app