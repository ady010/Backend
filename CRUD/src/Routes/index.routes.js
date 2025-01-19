const express = require("express")
const cont = require("../Controllers/user.controller")
const router = express.Router()

router.get("/", cont.userController )
router.get("/create", cont.createUser)
router.get("/read", cont.readUser)
router.get("/update", cont.updateUser)
router.get("/delete", cont.deleteUser)


module.exports = router
