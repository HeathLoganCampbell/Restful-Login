var express = require('express')
var router = express.Router()
const passport = require('passport');
const isAuth = require('../../commons/is-auth')

router.get("/", isAuth(), (req, res) => {
  return res.json({ "Animal": "Dogs" });
})

module.exports = router;