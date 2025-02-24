const express = require("express")
const router = express.Router()
const contr = require("../Controller/feed.controller")

router.post("/", contr.feedController)


module.exports = router