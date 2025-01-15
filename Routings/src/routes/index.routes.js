const express = require('express')
const ind = require("../controllers/index.controllers")
const router = express.Router()

router.get("/", ind.indexController)

module.exports = router