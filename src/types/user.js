const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require("../database")

// Compare passwords
function comparePasswords(password, callback) {
  console.log("RUNING COMPARREEEEEEEEEEEE :DDDDD")
  console.log("input pass " + password)
  console.log("contain pass " + this.password)

  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error, false);
    }
    return callback(null, isMatch);
  });
}


// Hash the password
function hashPassword(user) {
  if (user.changed('password')) {
    return bcrypt.hash(user.password, 12).then(function (password) {
      user.password = password;
    });
  }
}


var modelDefinition = {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const modelOptions = {
  hooks: {
    beforeValidate: hashPassword
  },
};


const UserModel = db.define('User', modelDefinition, modelOptions);
UserModel.prototype.comparePasswords = comparePasswords;

module.exports = UserModel;