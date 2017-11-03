var express = require("express");
var router = express.Router();
var Master = require("../models/master");

/* GET all masters */
router.get("/", function(req, res, next) {
  const maxNum = 500;
  const num = Math.min(maxNum, req.query.num || maxNum);
  const sortObject = {};
  if (req.query.sort) {
    if (req.query.order === "desc") {
      sortObject[req.query.sort] = -1;
    } else {
      sortObject[req.query.sort] = 1;
    }
  }
  Master.find({})
    .sort(sortObject)
    .limit(num)
    .populate("series", "name")
    .populate("credits.artist", "name")
    .populate("publisher", "name")
    .populate("addedBy", "username")
    .exec()
    .then(masters => res.json(masters))
    .catch(err => next(err));
});

/* GET a particlar master */
router.get("/:id", (req, res, next) => {
  Master.findOne({
    _id: req.params.id
  })
    .populate("series", "name")
    .populate("credits.artist", "name")
    .populate("publisher", "name")
    .populate("addedBy", "username")
    .exec()
    .then(master => res.json(master))
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  const master = new Master(req.body);
  master
    .save()
    .then(master => res.json(master))
    .catch(err => next(err));
});

module.exports = router;
