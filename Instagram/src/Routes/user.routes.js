const express = require("express")
const router = express.Router()
const contr = require("../Controller/user.controller")
const midw = require("../Middleware/users.middleware")

router.post("/register", contr.registercontroller)
router.post("/login", contr.logincontroller)
router.get("/profile", midw.authUser,contr.profilecontroller)


module.exports = router