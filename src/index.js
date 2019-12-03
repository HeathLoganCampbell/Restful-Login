const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config()

const isAuth = require('./commons/is-auth');
const db = require('./database');
const app = express();
const port = process.env.PORT || 3000;

const User = require("./types/user")

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-with');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

const enderpoints = require("./endpoints");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", enderpoints)

app.get("/", (req, res) => {
  var example = { "Animal": "Dogs" };
  return res.json(example);
})


//Sync types
db.sync({ force: false }).then(message => {
  console.log('db synced');
})
  .catch(function (err) {
    throw err;
  });

app.use(passport.initialize());

isAuth(passport);


app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(port, () => {
  console.log('Bevs] On port: http://localhost:' + port);
})