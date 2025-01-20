
const express = require('express');
const app = express();

const path = require("path")
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname , "views"))
const indexRouter = require('./routes/user.routes')
app.use('/', indexRouter) 


module.exports = app;