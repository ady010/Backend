const {Router} = require('express') 
const { indexController, createUser, showName, showPost , createPost, createController, incLike, Delete } = require('../Controller/index.controller')
const router = Router()


router.get("/", indexController)
router.post("/create-user", createUser)
router.get("/create-post", createController)
router.post("/create-post", createPost)
router.get("/home", showPost)
router.post("/like", incLike)
router.post("/delete", Delete )



module.exports = router