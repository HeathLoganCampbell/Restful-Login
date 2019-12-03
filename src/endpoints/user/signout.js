var express = require('express')
var router = express.Router()

router.post("/", (req, res) => {
  var example = "signed out";
  return res.json(example);
})

module.exports = router;

