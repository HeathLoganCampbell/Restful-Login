var express = require('express')
var router = express.Router()

router.post("/", (req, res) => {
  var example = { "Animal": "Dogs" };
  return res.json(example);
})

module.exports = router;

