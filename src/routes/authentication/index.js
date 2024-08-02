const express = require('express')
const router = express.Router()
const Authentication = require('../../controllers/authentication')

router.post('/login', Authentication.login)

module.exports = router
