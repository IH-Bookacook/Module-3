var express = require("express");
var router = express.Router();
var Publisher = require("../models/publisher");
var Master = require("../models/master");

/* GET all publishers */
router.get("/", function(req, res, next) {
  Publisher.find({}).exec((err, publishers) => {
    if (err) {
      next(err);
    }
    res.json(publishers);
  });
});

/* GET a particular publisher */
router.get("/:id", (req, res, next) => {
  Publisher.findOne(
    {
      _id: req.params.id
    },
    (err, publisher) => {
      if (err) {
        req.flash(
          "error",
          `There's no publisher available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(publisher);
    }
  );
});

/* GET all the masters of a particular publisher */
router.get("/:id/masters", (req, res, next) => {
  Master.find(
    {
      publisher: req.params.id
    },
    (err, artist) => {
      if (err) {
        req.flash(
          "error",
          `There's no master available for this publisher ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(artist);
    }
  );
});

module.exports = router;
