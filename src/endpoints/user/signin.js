var express = require('express')
var router = express.Router()
const passport = require('passport');
const UserManager = require("../../managers/user-manageer")

router.post("/", (req, res) => {
  UserManager.fetchUser(req.body.email, req.body.password, res)
})

module.exports = router;