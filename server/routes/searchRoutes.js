const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const { generalStats } = require("../splitgateAPI/matchmaking");
//
//router.get("/:gamertag/:season",(req,res,next)=>{
//    generalStats(req.params.gamertag, req.params.season)
//    .then(result=>{
//        return res.status(200).json(result);
//    })
//    .catch(err=>
//        res.status(501).json({message:err.message, status:err.status})
//    )
//})

router.get("/:platform/:gamertag", async (req, res) => {
  const { platform, gamertag } = req.params;
  generalStats(platform, gamertag)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => res.status(501).json({ message: err.message }));
});

module.exports = router;
