const express = require('express').Router
const router = express()
const userController = require('../controllers/user')

router.post('/',userController)

module.exports = router