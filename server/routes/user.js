var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET all users */
router.get("/", function(req, res, next) {
  User.find({}).exec((err, users) => {
    if (err) {
      next(err);
    }
    res.json(users);
  });
});

/* GET a user */
router.get("/:id", (req, res, next) => {
  User.findOne(
    {
      _id: req.params.id
    },
    (err, user) => {
      if (err) {
        req.flash(
          "error",
          `There's no user available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(user);
    }
  );
});

module.exports = router;
