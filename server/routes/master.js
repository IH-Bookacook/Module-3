var express = require("express");
var router = express.Router();
var Master = require("../models/master");



/* GET all masters */
router.get("/", function(req, res, next) {
  Master.find({}).exec((err, masters) => {
    if (err) {
      next(err);
    }
    res.json(masters);
  });
});

router.get("/:id", (req, res, next) => {
  Master.findOne(
    {
      _id: req.params.id
    },
    (err, master) => {
      if (err) {
        req.flash(
          "error",
          `There's no master available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(master);
    }
  );
});

module.exports = router;
