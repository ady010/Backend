const express = require("express")
const { indexController, createController, showController, getUser } = require("../Controller/index.controller")
const router = express.Router()


router.get("/", indexController)
router.post("/create", createController)
router.get("/users",showController)
router.get("/users/:userID", getUser)

module.exports = router