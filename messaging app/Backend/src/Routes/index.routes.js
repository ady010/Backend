const express = require("express")
const router = express.Router()
const controller = require("../Controller/index.controller")

router.post("/home", controller.home)

module.exports = router