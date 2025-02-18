const express = require("express")
const Router = express.Router()
const controller = require("../Controller/users.controller")

Router.post("/register", controller.registerController)
Router.post("/login", controller.loginController)

module.exports = Router