const express = require("express")
const Router = express.Router()
const Contr = require("../Controller/index.controller")
const jwt = require('jsonwebtoken')
const postemodel = require('../Models/post.model')

Router.get("/", Contr.indexController)
Router.get("/feed", async(req, res, next) =>{

    const token = req.cookies.token
    if(!token){
        res.send('use is not authorized')
    }
    const decoded =  jwt.verify(token, process.env.JWT_URL)
    req.user = decoded
    console.log('user verifying')
    next()

}, Contr.feedController)
Router.get("/create-post", Contr.postController)
Router.post("/create-post", Contr.createpostController)


module.exports = Router