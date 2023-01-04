const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    gamertag:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Friend", FriendSchema);