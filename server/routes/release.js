var express = require("express");
var router = express.Router();
var Master = require("../models/master");
var Release = require("../models/release");

/* create a master by user */
router.post("/uploadBD", (req, res, next) => {
  const { title, releaseYear, releaseCountry, releaseLanguage, releasePublisher } = req.body;
    const release = new Release({
      title,
      releaseYear,
      releaseCountry,
      releaseLanguage,
      releasePublisher
    });

})
/* get all releases related to a master */
router.get("masters/:id/releases", (req, res, next) => {
  Release.findOne(
    {
      master: req.params.id
    },
    (err, releases) => {
      if (err) {
        req.flash(
          "error",
          `There are no releases related to this master ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(releases);
    }
  );
});

/* get a particular release */
router.get("releases/:id", (req, res, next) => {
  Release.findOne(
    {
      _id: req.params.id
    },
    (err, release) => {
      if (err) {
        req.flash(
          "error",
          `There's no release available with id ${req.params.id}`
        );
        return res.redirect("/");
      }
      res.json(release);
    }
  );
});

module.exports = router;
