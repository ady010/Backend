const express = require("express")
const app = express();
const indexRouter = require("./Routes/index.route")


app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)

module.exports = app
