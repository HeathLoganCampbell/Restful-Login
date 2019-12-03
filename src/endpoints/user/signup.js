const UserManager = require("../../managers/user-manageer")
var express = require('express')
var router = express.Router()

router.post("/", (req, res) => {
  UserManager.createUser(req.body.email, req.body.password, res)
})

module.exports = router;
