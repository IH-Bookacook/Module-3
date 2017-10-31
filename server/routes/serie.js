var express = require("express");
var router = express.Router();
var Serie = require("../models/serie");

/* GET all series */
router.get("/", function(req, res, next) {
  Serie.find({}).exec((err, series) => {
    if (err) {
      next(err);
    }
    res.json(series);
  });
});

router.get("/:id", (req, res, next) => {
  Serie.findOne(
    {
      _id: req.params.id
    },
    (err, serie) => {
      if (err) {
        req.flash(
          "error",
          `There's no serie available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(serie);
    }
  );
});
router.post("/series", (req, res, next) => {
  const { name,profile } = req.body;
  //create new series
  const series = new Series({
    name,
    profile
  })
  series.save().then(series => res.json(series));
});

module.exports = router;
