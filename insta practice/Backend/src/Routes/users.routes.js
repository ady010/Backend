const express = require("express")
const Router = express.Router()
const controller = require("../Controller/users.controller")
const middleware = require("../Middleware/user.middleware")

Router.post("/register", controller.registerController)
Router.post("/login", controller.loginController)
Router.get("/profile", middleware.authUser,controller.profileController)

module.exports = Router