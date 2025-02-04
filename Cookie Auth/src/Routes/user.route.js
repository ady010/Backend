const express = require("express")
const userRouter = express.Router()
const Contr = require("../Controller/user.controller")

userRouter.get("/", Contr.regController)
userRouter.post("/register", Contr.reguserController)


module.exports = userRouter