const express = require("express")
const Router = express.Router()
const contr = require("../Controller/post.controller")
const middleware = require("../Middleware/user.middleware")

Router.post("/post", middleware.authUser,contr.postController)


module.exports = Router