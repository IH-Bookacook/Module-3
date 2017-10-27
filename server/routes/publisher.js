var express = require("express");
var router = express.Router();
var Publisher = require("../models/publisher");

/* GET all publishers */
router.get("/", function(req, res, next) {
  Publisher.find({}).exec((err, publishers) => {
    if (err) {
      next(err);
    }
    res.json(publishers);
  });
});

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

module.exports = router;
