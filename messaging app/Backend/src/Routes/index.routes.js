const express = require("express")
const router = express.Router()
const controller = require("../Controller/index.controller")

router.post("/signup", controller.signup)

module.exports = router