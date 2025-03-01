const express = require('express');
const app = express();
const userRoutes = require("../src/Routes/routes")
// const postRoutes = require("./routes/posts.routes.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes)

// app.use('/users', userRoutes);



module.exports = app