const {Router, query} = require("express")
const { indexController, createController, showUsers,  } = require("../Controller/index.controller")
const router = Router()

router.get("/", indexController)

router.get("/create", createController)

router.get("/users", showUsers)

module.exports = router