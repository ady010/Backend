const {Router} = require('express') 
const { indexController, createUser, showPost, createPost, createController, incLike, Delete,loginController,userLogincontroller } = require('../Controller/index.controller')
const router = Router()


router.get("/", indexController)
router.post("/create-user", createUser)
router.get("/create-post", createController)
router.post("/create-post", createPost)
router.get("/home", showPost)
router.post("/like", incLike)
router.post("/delete", Delete )
router.get("/login", loginController )
router.post("/login", userLogincontroller )



module.exports = router