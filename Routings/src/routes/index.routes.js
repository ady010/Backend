const express = require('express')
const ind = require("../controllers/index.controllers")
const router = express.Router()

router.get("/", ind.indexController)
router.get("/create", ind.userCreate)

module.exports = router 