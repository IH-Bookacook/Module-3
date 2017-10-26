var express = require("express");
var router = express.Router();
var Master = require("../models/master");

/* GET all masters */
router.get("/masters", function(req, res, next) {
  Master.find({}).exec((err, masters) => {
    if (err) {
      next(err);
    }
    res.json(masters);
  });
});

module.exports = router;
