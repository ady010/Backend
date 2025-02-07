const express = require("express")
const router = express.Router()
const cont = require("../controller/index.controller")

router.get("/",cont.indexController)

module.exports = router

 