const express = require("express")
const app = express()
const userRoute = require("./Routes/user.routes")
const postRoute = require("./Routes/posts.routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/users",userRoute)
app.use("/posts",postRoute)

module.exports = app