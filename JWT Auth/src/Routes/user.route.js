const {Router} = require("express")
const userRouter = Router()
const contr = require("../Controller/user.controller")


userRouter.get("/", contr.userContr)
userRouter.post("/create", contr.createContr)
userRouter.post("/login", contr.loginContr)
userRouter.get("/profile", contr.profileContr)


module.exports = userRouter