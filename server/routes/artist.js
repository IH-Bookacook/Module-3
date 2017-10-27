var express = require("express");
var router = express.Router();
var Artist = require("../models/artist");
var Master = require("../models/master");

/* GET all artists */
router.get("/", function(req, res, next) {
  Artist.find({}).exec((err, artists) => {
    if (err) {
      next(err);
    }
    res.json(artists);
  });
});

/* GET a particular artist */
router.get("/:id", (req, res, next) => {
  Artist.findOne(
    {
      _id: req.params.id
    },
    (err, artist) => {
      if (err) {
        req.flash(
          "error",
          `There's no artist available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(artist);
    }
  );
});

/* GET a all masters of an artist */
router.get("/:id/masters", (req, res, next) => {
  Master.find(
    {
      "credits.artist": req.params.id
    },
    (err, artist) => {
      if (err) {
        req.flash(
          "error",
          `There's no master available for this artist ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(artist);
    }
  );
});

module.exports = router;
