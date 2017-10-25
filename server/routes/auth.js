const express = require('express');
const router = express.Router();
const User = require('../models/user');

const jwt = require("jwt-simple");      //for login we need to add
const passport = require("passport");   //for login we need to add
const config = require("../config");    //for login we need to add


router.post('/signup', (req, res, next) => {
  const {
    username,
    email,
    password
  } = req.body;
  //create new user.

  const user = new User({
   username,
    email,
  });

  User.register(user, password, (err) => {
    if (err) {
      return next(err)
    }
    res.json({ success: true })
  });
});
// User.authenticate() returns a function
const authenticate = User.authenticate();
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  // check if we have a username and password
  if (username && password) {
    // test if the credentials are valid
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        // an unexpected error from the database
        return next(err);
      }
      if (failed) {
        // failed logging (bad password, too many attempts, etc)
        return res.status(401).json({
          error: failed.message
        });
      }
      if (user) {

        const payload = {
          id: user.id
        };

        const token = jwt.encode(payload, config.jwtSecret);
        res.json({ token });
      }
    });
  } else {
    // unauthorized error
    res.sendStatus(401);
  }
});

module.exports = router;
