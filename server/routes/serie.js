var express = require("express");
var router = express.Router();
var Series = require("../models/serie");

/* GET all series */
router.get("/", function(req, res, next) {
  Series.find({}).exec((err, serie) => {
    if (err) {
      next(err);
    }
    res.json(serie);
  });
});

router.get("/:id", (req, res, next) => {
  Series.findOne(
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
router.post("/", (req, res, next) => {
  const { name, profile } = req.body;
  //create new series
  const series = new Series({
    name,
    profile
  })
  series.save().then(series => res.json(series));

});

module.exports = router;
