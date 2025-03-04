const express = require("express")
const router = express.Router()
const projController = require("../Controller/project.controller")

router.post("/create", projController.create)
router.get("/list",projController.list)


module.exports = router