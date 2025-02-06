const express = require("express")
const userRouter = express.Router()
const contr = require("../Controller/user.controller")


// userRouter.get("/", contr.userController)
userRouter.post("/register", contr.registerController)
userRouter.get("/login", contr.loginController)
userRouter.post("/login", contr.loginuserController)

module.exports = userRouter