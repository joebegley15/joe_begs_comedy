const express = require("express");
const router = express.Router();

// Item model
const Show = require("../../models/shows.js");

router.get("/", (req, res) => {
  Show.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const newShow = new Show({
    name: req.body.name,
    startTime: req.body.startTime,
    location: req.body.location
  });

  newShow.save().then(item => res.json(item));
});

module.exports = router;
