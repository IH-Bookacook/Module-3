var express = require("express");
var router = express.Router();
var Artist = require("../models/artist");

/* GET all artists */
router.get("/", function(req, res, next) {
  Artist.find({}).exec((err, artists) => {
    if (err) {
      next(err);
    }
    res.json(artists);
  });
});

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

module.exports = router;
