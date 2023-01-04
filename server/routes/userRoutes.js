const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportService = require("../services/passport");

const requireLogin = passport.authenticate("local", { session: false });

const User = require("../models/userModel");

const AuthenticationController = require("../controllers/authentication");

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
    gamertag: gt,
    alias: req.body.alias,
  };
  User.findOneAndUpdate({ gamertag: gt }, updatedAccount, {
    returnOriginal: false,
  })
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: Messages.teamNotFound,
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
