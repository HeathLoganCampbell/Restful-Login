
'use strict';

var JWTStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../types/user');

function hookJWTStrategy(passport) {
  var options = {};

  options.secretOrKey = process.env.JWT_KEY_SECRET;
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  options.ignoreExpiration = false;

  passport.use(new JWTStrategy(options, function (JWTPayload, callback) {
    User.findOne({ where: { email: JWTPayload.email } })
      .then(function (user) {
        if (!user) {
          callback(null, false);
          return;
        }
        callback(null, user);
      });
  }));
}

module.exports = hookJWTStrategy;