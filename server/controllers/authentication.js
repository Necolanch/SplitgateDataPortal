const User = require("../models/userModel");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      int: timestamp,
    },
    config.secret
  );
};

exports.signup = (req, res, next) => {
  const { gamertag, platform, alias, password } = req.body;

  if (!gamertag || !platform || !password || !alias) {
    return res.status(422).json({
      error:
        "Please provide alias (what you would like to go by), gamertag(xbl or psn)/steamID64(steam), gaming platform (xbl, psn, or steam) and password",
    });
  }

  User.findOne({ gamertag: gamertag }, (error, existingUser) => {
    if (error) {
      return next(error);
    }
    if (existingUser) {
      return res.status(422).json({ error: "Gamertag already in use" });
    }

    const user = new User({
      gamertag: gamertag,
      platform: platform,
      alias: alias,
      password: password,
    });

    user.save((error) => {
      console.log("saving user");
      if (error) {
        return next(error);
      }
      res.status(200).end();
    });
  });
};

exports.signin = (req, res, next) => {
  const user = req.user;
  res.send({
    token: tokenForUser(user),
    user_gt: user.gamertag,
    user_platform: user.platform,
  });
};
