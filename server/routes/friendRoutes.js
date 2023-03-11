const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/userModel");

router.get("/:gt", (req, res)=>{
  User.findOne({gamertag:req.params.gt})
      .then(result=>{
        return res.status(200).json(result)
      })
      .catch(err=>{
        console.log(err)
      })
})

router.post("/:gt", (req, res) => {
  User.findOne({ gamertag: req.params.gt })
    .exec()
    .then((result) => {
      if (result.friends.length===0) {
        console.log("No friends yet")
        User.findOneAndUpdate({gamertag: req.params.gt}, {friends:[{gamertag:req.body.gamertag, platform:req.body.platform, alias: req.body.alias}]})
            .then(res=>{
              return res.status(200).json(res)
            })
      }
      for (const friend of result.friends) {
        if (friend.gamertag === req.body.gamertag) {
          return res
            .status(406)
            .json({ error: { message: "Friend already added" } });
        }
      }
      User.findOneAndUpdate({gamertag: req.params.gt}, {friends:[{gamertag:req.body.gamertag, platform:req.body.platform, alias: req.body.alias}, ...result.friends]}, {returnOriginal:false})
          .then(response=>{
            return res.status(200).json(response)
          })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: {
          message: `Unable to save friend with gamertag ${req.body.gamertag}`,
        },
      });
    });
});

router.delete("/:gt/:friend", (req, res) => {
  const gamertag = req.params.gt;
  User.findOne({ gamertag: gamertag })
    .exec()
    .then((result) => {
      const update=result.friends.filter((friend) => friend.gamertag !== req.params.friend);
      User.findOneAndUpdate({gamertag:req.params.gt}, {friends:update})
          .then(response=>res.status(200).json(response))
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

module.exports = router;
