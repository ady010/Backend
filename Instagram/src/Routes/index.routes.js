const express = require("express")
const router = express.Router()
const contr = require("../Controller/index.controller")
const mdw = require("../Middleware/users.middleware")


router.post('/index', mdw.authUser,contr.feedContr)


module.exports = router