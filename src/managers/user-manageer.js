/*
Creates and verifes users
*/
const jwt = require('jsonwebtoken');
const db = require('../database');
const User = require('../types/User');

const EMAIL_REGEX = /\S+@\S+\.\S+/

function createUser(email, password, response) {
  validateUser({ email: email, password: password })
    .then(() => {
      //Create user

      db.sync().then(() => {
        const newUser = {
          email: email,
          password: password,
        };

        return User.create(newUser).then(() => {
          console.log("created new user " + newUser.email);
          response.json({ "message": "successfully created new user", "version": "yeet" });
        });
      }).catch((error) => {
        console.log(error);
        response.json({ "message": error, "version": "yeet" })
      });
    })
    .catch((obj) => {
      response.json({ "message": obj, "version": "yeet" })
    })
}

function validateUser(preUserObj) {
  return new Promise((resolve, reject) => {
    console.log("Starting ....." + preUserObj.email)
    //no use name or password was entered
    if (!preUserObj.email || !preUserObj.password) {
      console.log("failed empty check")
      reject('Please provide a email and a password.');
      return;
    }


    if (!validateEmail(preUserObj.email)) {
      console.log("failed validateEmail")
      reject('You must enter an email');
      return;
    }

    //Check if email already existss
    User.findOne({
      where: { email: preUserObj.email },
      attributes: ['id', 'email', 'updatedAt', 'createdAt'],
    }).then((users) => {
      if (users == null)
        resolve();
      else
        reject("Use already exists");
    }).catch((error) => {
      console.log(error);
      reject("An error has ocurred");
    });



  });
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}


function fetchUser(email, password, response) {
  if (!email || !password) {
    response.json({ message: "Please provide a email and password." })
    return;
  }

  console.log("Searching for user in database")
  User.findOne({
    where: { email: email },
    attributes: ['id', 'email', 'password', 'updatedAt', 'createdAt'],
  }).then((user) => {
    if (user == null) {
      response.json({ message: "Authentication failed!" })
      return;
    }
    //checks client and inpsut password with eachother
    console.log("found user " + user.email)
    user.comparePasswords(password, (error, isMatch) => {
      if (isMatch && !error) {
        const token = jwt.sign({
          email: user.email,
        }, process.env.JWT_KEY_SECRET, { expiresIn: '300m' });

        response.json({
          success: true,
          token: `JWT ${token}`
        });
      }
      else {
        response.status(404).json({
          message: 'Login failed!',
        });
      }
    });

  }).catch((error) => {
    response.json({ message: error })
  });
}

module.exports = { createUser: createUser, fetchUser: fetchUser };