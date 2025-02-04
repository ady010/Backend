const express = require("express")
const app = express()
const router = require("../src/Routes/index.route")
const userRouter = require("../src/Routes/user.route")
const cookieParser = require("cookie-parser")

app.set("view engine","ejs")
app.set("views","./src/views")
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router)
app.use("/users", userRouter)



module.exports = app