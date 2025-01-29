const {Router} = require("express")
const router = Router()
const controller = require("../Controller/index.controller")


router.get("/", controller.regController)
router.post("/create", controller.createUser)
router.get("/show", controller.showUser)
// router.post("/register", controller.regUser)
router.get("/login", controller.loginUser)
router.post("/login", controller.loginuserCont)


module.exports = router