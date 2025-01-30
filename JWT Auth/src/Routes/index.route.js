const { Router } = require("express")
const router = Router()
const contr = require("../Controller/index.controller")

router.get("/", contr.indexCont)


module.exports = router