const express = require("express")
const Router = express.Router()
const Contr = require("../Controller/index.controller")

Router.get("/", Contr.indexController)
Router.get("/feed", Contr.feedController)
Router.get("/create-post", Contr.postController)
Router.post("/create-post", Contr.createpostController)


module.exports = Router