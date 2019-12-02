const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  var example = { "Animal": "Dogs" };
  return res.json(example);
})

app.listen(port, () => {
  console.log('Bevs] On port: http://localhost:' + port);
})