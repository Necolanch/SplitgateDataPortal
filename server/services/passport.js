const passport = require("passport");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local");

const User = require("../models/userModel");
const config = require("../config");

const localOptions = {
  usernameField: "gamertag"
};

const localStrategy = new LocalStrategy(localOptions, function (
  gamertag,
  password,
  done
) {
  User.findOne({ gamertag: gamertag }, function (error, user) {
    if (error) {
      return done(error);
    }
    if (!user) {
      return done(null, false);
    }
    user.comparePassword(password, function (error, isMatch) {
      if (error) {
        return done(error);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
});

const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
};

const Strategy = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (error, user) {
    if (error) {
      return done(error, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(localStrategy);

passport.use(Strategy);
