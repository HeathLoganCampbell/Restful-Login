const passport = require('passport');

function isAuth() {
  return passport.authenticate('jwt', { session: false })
}

module.exports = isAuth;