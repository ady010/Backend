const express = require('express');
const router = express.Router();
const {indexController, createUserForm} = require('../controllers/user.controller')

router.get('/', indexController)
router.get('/create', createUserForm)

module.exports = router;