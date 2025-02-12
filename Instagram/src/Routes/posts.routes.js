const express = require("express")
const router = express.Router()
const contr = require("../Controller/posts.controller")
const mdw = require("../Middleware/users.middleware")


router.post('/create',mdw.authUser,contr.postcreatecontr)



module.exports = router