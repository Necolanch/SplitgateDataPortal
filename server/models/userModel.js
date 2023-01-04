const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  gamertag: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
    type: Array,
    required: false,
  },
});

UserSchema.pre("save", function (next) {
  console.log("before save");
  const user = this;
  if (user.isNew || user.isModified("password")) {
    bcrypt.genSalt(10, (error, salt) => {
      console.log("doing password stuff");
      if (error) {
        console.log(error);
        return next(error);
      }
      bcrypt.hash(user.password, salt, (error, hash) => {
        console.log("hashing password");
        if (error) {
          console.log(error);
          return next(error);
        }
        user.password = hash;
        return next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
