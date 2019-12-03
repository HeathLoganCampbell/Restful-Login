var express = require('express')
var router = express.Router()

router.use('/signup', require("./signup"))
router.use('/signin', require("./signin"))
router.use('/can-access', require("./can-access"))
router.use('/signout', require("./signout"))

module.exports = router