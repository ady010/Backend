const express = require("express")
const router = express.Router()
const contr = require("../Controller/index.controller")


router.get("/", contr.indexController)

router.get("/feed", contr.feedController)


module.exports = router