const express = require("express")
const app = express()
const route = require("./Routes/index.routes")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", route)

app.set('view engine','ejs')
app.set('views','./src/views')


//mongodb+srv://adityapahane:E5YaNh7iosObLh3W@cluster1.zapww.mongodb.net/


module.exports = app
