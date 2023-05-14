const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.get("/:gamertag", (req, res) => {
  const gt = req.params.gamertag;
  User.findOne({ gamertag: gt })
    .exec()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

router.patch("/:gamertag", (req, res) => {
  const gt = req.params.gamertag;
  const updatedAccount = {
    alias: req.body.alias,
    gamertag:req.body.gamertag,
    platform:req.body.plaform
  };
  User.findOneAndUpdate({ gamertag: gt }, updatedAccount, {
    returnOriginal: false,
  })
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = router;
