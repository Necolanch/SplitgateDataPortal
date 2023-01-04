const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/userModel");

router.get("/:gt", (req, res) => {
  User.find({ gamertag: req.params.gt })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    });
});

router.post("/:gt", (req, res) => {
  User.find({ gamertag: req.params.gt })
    .exec()
    .then((result) => {
      for (const friend of result.friends) {
        if (friend === req.body.gamertag) {
          return res
            .status(406)
            .json({ error: { message: "Friend already added" } });
        }
      }

      result.friends = [req.body.gamertag, ...result.friends];
      return res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: `Unable to save friend with gamertag ${req.body.gamertag}`,
        },
      });
    });
});

router.delete("/:gt/:friend", (req, res) => {
  const gamertag = req.params.gt;
  User.find({ gamertag: gamertag })
    .exec()
    .then((result) => {
      result.friends.filter((friend) => friend !== req.params.friend);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

module.exports = router;
