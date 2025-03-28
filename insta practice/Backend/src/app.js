const express = require("express")
const app = express()
const Router = require("../src/Routes/users.routes")
const postRouter = require("../src/Routes/post.routes")
const feedRouter = require("../src/Routes/feed.routes")
const cors = require('cors');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:"http://localhost:5173"}, {Credential:true}))

app.use("/users", Router)
app.use("/posts", postRouter)
app.use("/", feedRouter)


module.exports = app