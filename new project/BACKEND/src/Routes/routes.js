const express = require("express")
const router = express.Router()
const controller = require("../Controller/users.controller")

router.post("/register",controller.userController)

module.exports = router