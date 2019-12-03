var express = require('express')
var router = express.Router()
const passport = require('passport');

router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  var example = { "Animal": "Dogs" };
  return res.json(example);
})

module.exports = router;