import React, {useState, useEffect} from "react";

import DetailsNavigation from "../components/DetailsNavigation";
import {Avatar} from "../components/Avatar";

import {GiDeathSkull, GiFire, GiHealthDecrease, GiInternalInjury, GiBullseye, GiTargeted, GiMailedFist, GiGrenade, GiNinjaHead, GiMissileSwarm, GiBattleTank, GiLaurelsTrophy, GiStopwatch, GiExitDoor, GiStarMedal} from "react-icons/gi";
import {FaPercentage, FaHandshake, FaThumbsDown, FaEquals} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import {ImSigma} from "react-icons/im";
import authHeader from "../services/authHeader";

import "../CSS/details.css";

const Details = props => {
    //Overall Game stats
  const [kd, setKd] = useState([]);
  const [kills, setKills] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [assists, setAssists] = useState([]);

  const [headshots, setHeadshots] = useState([]);
  const [melee, setMelee] = useState([]);
  const [oddball, setOddball] = useState([]);
  const [collaterals, setCollaterals] = useState([]);
  const [flag, setFlag] = useState([]);
  const [teabags, setTeabags] = useState([]);

  const [portalKills, setPortalKills] = useState([]);
  const [killsThruPortal, setKillsThruPortal] = useState([]);
  const [portalsSpawned, setPortalsSpawned] = useState([]);
  const [distancePortaled, setDistancePortaled] = useState([]);
  const [ownPortalsEntered, setOwnPortalsEntered] = useState([]);
  const [allyPortalsEntered, setAllyPortalsEntered] = useState([]);
  const [enemyPortalsEntered, setEnemyPortalsEntered] = useState([]);
  const [enemyPortalsDestroyed, setEnemyPortalsDestroyed] = useState([]);

  const [shotsLanded, setShotsLanded] = useState([]);
  const [shotsMissed, setShotsMissed] = useState([]);
  const [accuracy, setAccuracy] = useState([]);
  const [damageDealt, setDamageDealt] = useState([]);

  const [timePlayed, setTimePlayed] = useState([]);
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const [wlPercentage, setWlPercentage] = useState([]);
  const [wins, setWins] = useState([]);
  const [losses, setLosses] = useState([]);

  //Ranked 4v4 Playlist stats
  const [rank4s, setRank4s] = useState([]);

  const [ranked4sKd, setRanked4sKd] = useState([]);
  const [ranked4sKills, setRanked4sKills] = useState([]);
  const [ranked4sDeaths, setRanked4sDeaths] = useState([]);
  const [ranked4sAssists, setRanked4sAssists] = useState([]);

  const [ranked4sHeadshots, setRanked4sHeadshots] = useState([]);
  const [ranked4sMelee, setRanked4sMelee] = useState([]);
  const [ranked4sOddball, setRanked4sOddball] = useState([]);
  const [ranked4sCollaterals, setRanked4sCollaterals] = useState([]);
  const [ranked4sFlag, setRanked4sFlag] = useState([]);
  const [ranked4sTeabags, setRanked4sTeabags] = useState([]);

  const [ranked4sPortalKills, setRanked4sPortalKills] = useState([]);
  const [ranked4sKillsThruPortal, setRanked4sKillsThruPortal] = useState([]);
  const [ranked4sPortalsSpawned, setRanked4sPortalsSpawned] = useState([]);
  const [ranked4sDistancePortaled, setRanked4sDistancePortaled] = useState([]);
  const [ranked4sOwnPortalsEntered, setRanked4sOwnPortalsEntered] = useState(
    []
  );
  const [ranked4sAllyPortalsEntered, setRanked4sAllyPortalsEntered] = useState(
    []
  );
  const [ranked4sEnemyPortalsEntered, setRanked4sEnemyPortalsEntered] =
    useState([]);
  const [ranked4sEnemyPortalsDestroyed, setRanked4sEnemyPortalsDestroyed] =
    useState([]);

  const [ranked4sShotsLanded, setRanked4sShotsLanded] = useState([]);
  const [ranked4sShotsMissed, setRanked4sShotsMissed] = useState([]);
  const [ranked4sAccuracy, setRanked4sAccuracy] = useState([]);
  const [ranked4sDamageDealt, setRanked4sDamageDealt] = useState([]);

  const [ranked4sTimePlayed, setRanked4sTimePlayed] = useState([]);
  const [ranked4sGamesPlayed, setRanked4sGamesPlayed] = useState([]);
  const [ranked4sWlPercentage, setRanked4sWlPercentage] = useState([]);
  const [ranked4sWins, setRanked4sWins] = useState([]);
  const [ranked4sLosses, setRanked4sLosses] = useState([]);

    const user=JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        const getStats = async () => {
            await fetch(`http://localhost:3001/${user.user_platform}/${user.user_gt}`, {headers:authHeader()})
            .then(response=>response.json())
            .then(result=>{
                const overall = result.data.segments.find(
                    (obj) => obj.type === "overview"
                  );
                  const ranked4v4 = result.data.segments.find(
                    (obj) => obj.metadata.name === "Ranked 4v4"
                  );
                const setAll = () => {
                    //Set overall game stats
            setKd(overall.stats.kd.displayValue);
            setKills(overall.stats.kills.displayValue);
            setDeaths(overall.stats.deaths.displayValue);
            setAssists(overall.stats.assists.displayValue);

            setHeadshots(overall.stats.headshotKills.displayValue);
            setMelee(overall.stats.meleeKills.displayValue);
            setTeabags(overall.stats.teabags.displayValue);
            setOddball(overall.stats.oddballKills.displayValue);
            setFlag(overall.stats.flagKills.displayValue);
            setCollaterals(overall.stats.collaterals.displayValue);

            setPortalKills(overall.stats.portalKills.displayValue);
            setKillsThruPortal(overall.stats.killsThruPortal.displayValue);
            setPortalsSpawned(overall.stats.portalsSpawned.displayValue);
            setDistancePortaled(overall.stats.distancePortaled.displayValue);
            setOwnPortalsEntered(overall.stats.ownPortalsEntered.displayValue);
            setAllyPortalsEntered(
              overall.stats.allyPortalsEntered.displayValue
            );
            setEnemyPortalsEntered(
              overall.stats.enemyPortalsEntered.displayValue
            );
            setEnemyPortalsDestroyed(
              overall.stats.enemyPortalsDestroyed.displayValue
            );

            setDamageDealt(overall.stats.damageDealt.displayValue);
            setShotsLanded(overall.stats.shotsLanded.displayValue);
            setShotsMissed(
              overall.stats.shotsFired.value - overall.stats.shotsLanded.value
            );
            setAccuracy(overall.stats.shotsAccuracy.displayValue);

            setTimePlayed(overall.stats.timePlayed.displayValue);
            setGamesPlayed(overall.stats.matchesPlayed.displayValue);
            setWlPercentage(overall.stats.wlPercentage.displayValue);
            setWins(overall.stats.wins.displayValue);
            setLosses(overall.stats.losses.displayValue);

            //Set ranked 4v4 game stats
            setRank4s(ranked4v4.stats.rankLevel.metadata.rankName);
            setRanked4sKd(ranked4v4.stats.kd.displayValue);
            setRanked4sKills(ranked4v4.stats.kills.displayValue);
            setRanked4sDeaths(ranked4v4.stats.deaths.displayValue);
            setRanked4sAssists(ranked4v4.stats.assists.displayValue);

            setRanked4sHeadshots(ranked4v4.stats.headshotKills.displayValue);
            setRanked4sMelee(ranked4v4.stats.meleeKills.displayValue);
            setRanked4sTeabags(ranked4v4.stats.teabags.displayValue);
            setRanked4sOddball(ranked4v4.stats.oddballKills.displayValue);
            setRanked4sFlag(ranked4v4.stats.flagKills.displayValue);
            setRanked4sCollaterals(ranked4v4.stats.collaterals.displayValue);

            setRanked4sPortalKills(ranked4v4.stats.portalKills.displayValue);
            setRanked4sKillsThruPortal(
              ranked4v4.stats.killsThruPortal.displayValue
            );
            setRanked4sPortalsSpawned(
              ranked4v4.stats.portalsSpawned.displayValue
            );
            setRanked4sDistancePortaled(
              ranked4v4.stats.distancePortaled.displayValue
            );
            setRanked4sOwnPortalsEntered(
              ranked4v4.stats.ownPortalsEntered.displayValue
            );
            setRanked4sAllyPortalsEntered(
              ranked4v4.stats.allyPortalsEntered.displayValue
            );
            setRanked4sEnemyPortalsEntered(
              ranked4v4.stats.enemyPortalsEntered.displayValue
            );
            setRanked4sEnemyPortalsDestroyed(
              ranked4v4.stats.enemyPortalsDestroyed.displayValue
            );

            setRanked4sDamageDealt(ranked4v4.stats.damageDealt.displayValue);
            setRanked4sShotsLanded(ranked4v4.stats.shotsLanded.displayValue);
            setRanked4sShotsMissed(
              ranked4v4.stats.shotsFired.value -
                ranked4v4.stats.shotsLanded.value
            );
            setRanked4sAccuracy(ranked4v4.stats.shotsAccuracy.displayValue);

            setRanked4sTimePlayed(ranked4v4.stats.timePlayed.displayValue);
            setRanked4sGamesPlayed(ranked4v4.stats.matchesPlayed.displayValue);
            setRanked4sWlPercentage(ranked4v4.stats.wlPercentage.displayValue);
            setRanked4sWins(ranked4v4.stats.wins.displayValue);
            setRanked4sLosses(ranked4v4.stats.losses.displayValue);
                }
            setAll();
            })
        }
        getStats();
        return;
    }, [props]);
    
    return (
        <div>
        <DetailsNavigation />

        <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">Halo Fakepoint</h1>
           
            <Avatar/>

            <div className="absolute w-screen flex justify-end mt-16 -ml-20 mb-10 text-white text-xl font-medium">
      </div>

      <div className="serviceRecord absolute flex w-11/12 top-24 ml-32 text-white z-10">
        <section className="w-1/2">
          <section className="w-3/5">
            <h5 className="text-xl font-medium">Overall Gunfight Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiDeathSkull className="gunfight -mb-5" />
                <span className="ml-8">Kills &nbsp; {kills}</span>
              </li>
              <li>
                <img
                  className="-mb-5 ml-8"
                  src={require("../Icons-IMG/tombstone.png")}
                  alt=""
                  width="20"
                  height="20"
                />
                <span className="ml-16">Deaths &nbsp; {deaths}</span>
              </li>
              <li>
                <FaPercentage className="gunfight kdratio ml-8" />
                <span className="ml-16">K/D Ratio &nbsp; {kd}</span>
              </li>

              <div className="mt-4 flex">
                <li>
                  <FaHandshake className="gunfight -mb-5" />
                  <span className="ml-8">Assists &nbsp; {assists}</span>
                </li>
                <li className="ml-8">
                  <GiFire className="gunfight -mb-5" />
                  <span className="ml-8">Highest Streak &nbsp; {}</span>
                </li>
              </div>
            </ul>
          </section>

          <section className="w-2/3 mt-8">
            <h5 className="text-xl font-medium">Overall Portal Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiHealthDecrease className="damage -mb-5" />
                <span className="ml-8">Portal Kills &nbsp; {portalKills}</span>
              </li>
              <li>
                <GiInternalInjury className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Kills Thru Portal &nbsp; {killsThruPortal}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Portals Spawned &nbsp; {portalsSpawned}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Distance Portaled &nbsp; {distancePortaled}m
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Your Portals Entered &nbsp; {ownPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Teammate Portals Entered &nbsp; {allyPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Enemy Portals Entered &nbsp; {enemyPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Enemy Portals Destroyed &nbsp; {enemyPortalsDestroyed}
                </span>
              </li>
            </ul>
          </section>

          <section className="w-2/3 mt-8">
            <h5 className="text-xl font-medium">Overall Accuracy Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiBullseye className="gunfight -mb-5" />
                <span className="ml-8">Shots Landed &nbsp; {shotsLanded}</span>
              </li>
              <li>
                <MdClose className="gunfight -mb-5 ml-8 relative top-0.5" />
                <span className="ml-16">Shots Missed &nbsp; {shotsMissed}</span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">Accuracy &nbsp; {accuracy}</span>
              </li>
              <li>
                <GiHealthDecrease className="damage -mb-5" />
                <span className="ml-8">Damage Dealt &nbsp; {damageDealt}</span>
              </li>
            </ul>
          </section>

          <section className="w-3/5 mt-8">
            <h5 className="text-xl font-medium">Overall Gunfight Breakdown</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiTargeted className="gunfight kdratio -mb-5" />
                <span className="ml-8">Headshots &nbsp; {headshots}</span>
              </li>
              <li className="ml-8">
                <GiMailedFist className="gunfight -mb-5" />
                <span className="ml-8">Melee &nbsp; {melee}</span>
              </li>
              <li>
                <GiGrenade className="gunfight -mb-5 ml-8" />
                <span className="ml-16">Oddball &nbsp; {oddball}</span>
              </li>

              <div className="mt-8 flex">
                <li>
                  <GiNinjaHead className="gunfight -mb-5" />
                  <span className="ml-8">Flag &nbsp; {flag}</span>
                </li>
                <li className="ml-8">
                  <GiMissileSwarm className="gunfight -mb-5" />
                  <span className="ml-8">Collaterals &nbsp; {collaterals}</span>
                </li>
                <li className="ml-8">
                  <GiBattleTank className="gunfight -mb-5" />
                  <span className="ml-8">Teabags &nbsp; {teabags}</span>
                </li>
              </div>
            </ul>
          </section>

          <section className="w-4/5 mt-8">
            <h5 className="text-xl font-medium">Overall Match Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiLaurelsTrophy className="gunfight kdratio -mb-5" />
                <span className="ml-8">Wins &nbsp; {wins}</span>
              </li>
              <li className="ml-8">
                <FaThumbsDown className="gunfight -mb-5" />
                <span className="ml-8">Losses &nbsp; {losses}</span>
              </li>
              <li>
                <GiStopwatch className="gunfight -mb-5 ml-8" />
                <span className="ml-16">Time Played &nbsp; {timePlayed}</span>
              </li>

              <div className="mt-8 flex">
                <li className="ml-8">
                  <ImSigma className="gunfight -mb-5" />
                  <span className="ml-8">
                    Games Played &nbsp; {gamesPlayed}
                  </span>
                </li>
                <li className="ml-8">
                  <FaPercentage className="gunfight -mb-5" />
                  <span className="ml-8">Win Rate &nbsp; {wlPercentage}</span>
                </li>
              </div>
            </ul>
          </section>
        </section>

        <section className="w-1/2">
          <section className="w-3/5">
            <h5 className="text-xl font-medium">Ranked 4v4 Gunfight Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiDeathSkull className="gunfight -mb-5" />
                <span className="ml-8">Kills &nbsp; {ranked4sKills}</span>
              </li>
              <li>
                <img
                  className="-mb-5 ml-8"
                  src={require("../Icons-IMG/tombstone.png")}
                  alt=""
                  width="20"
                  height="20"
                />
                <span className="ml-16">Deaths &nbsp; {ranked4sDeaths}</span>
              </li>
              <li>
                <FaPercentage className="gunfight kdratio ml-8" />
                <span className="ml-16">K/D Ratio &nbsp; {ranked4sKd}</span>
              </li>

              <div className="mt-4 flex">
                <li>
                  <FaHandshake className="gunfight -mb-5" />
                  <span className="ml-8">Assists &nbsp; {ranked4sAssists}</span>
                </li>
                <li className="ml-8">
                  <GiFire className="gunfight -mb-5" />
                  <span className="ml-8">Highest Streak &nbsp; {}</span>
                </li>
              </div>
            </ul>
          </section>

          <section className="w-2/3 mt-8">
            <h5 className="text-xl font-medium">Ranked 4v4 Portal Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiHealthDecrease className="damage -mb-5" />
                <span className="ml-8">
                  Portal Kills &nbsp; {ranked4sPortalKills}
                </span>
              </li>
              <li>
                <GiInternalInjury className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Kills Thru Portal &nbsp; {ranked4sKillsThruPortal}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Portals Spawned &nbsp; {ranked4sPortalsSpawned}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Distance Portaled &nbsp; {ranked4sDistancePortaled}m
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Your Portals Entered &nbsp; {ranked4sOwnPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Teammate Portals Entered &nbsp; {ranked4sAllyPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Enemy Portals Entered &nbsp; {ranked4sEnemyPortalsEntered}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Enemy Portals Destroyed &nbsp; {ranked4sEnemyPortalsDestroyed}
                </span>
              </li>
            </ul>
          </section>

          <section className="w-2/3 mt-8">
            <h5 className="text-xl font-medium">Ranked 4v4 Accuracy Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiBullseye className="gunfight -mb-5" />
                <span className="ml-8">
                  Shots Landed &nbsp; {ranked4sShotsLanded}
                </span>
              </li>
              <li>
                <MdClose className="gunfight -mb-5 ml-8 relative top-0.5" />
                <span className="ml-16">
                  Shots Missed &nbsp; {ranked4sShotsMissed}
                </span>
              </li>
              <li>
                <FaPercentage className="damage -mb-5 ml-8" />
                <span className="ml-16">
                  Accuracy &nbsp; {ranked4sAccuracy}
                </span>
              </li>
              <li>
                <GiHealthDecrease className="damage -mb-5" />
                <span className="ml-8">
                  Damage Dealt &nbsp; {ranked4sDamageDealt}
                </span>
              </li>
            </ul>
          </section>

          <section className="w-3/5 mt-8">
            <h5 className="text-xl font-medium">
              Ranked 4v4 Gunfight Breakdown
            </h5>
            <ul className="flex flex-wrap">
              <li>
                <GiTargeted className="gunfight kdratio -mb-5" />
                <span className="ml-8">
                  Headshots &nbsp; {ranked4sHeadshots}
                </span>
              </li>
              <li className="ml-8">
                <GiMailedFist className="gunfight -mb-5" />
                <span className="ml-8">Melee &nbsp; {ranked4sMelee}</span>
              </li>
              <li>
                <GiGrenade className="gunfight -mb-5 ml-8" />
                <span className="ml-16">Oddball &nbsp; {ranked4sOddball}</span>
              </li>

              <div className="mt-8 flex">
                <li>
                  <GiNinjaHead className="gunfight -mb-5" />
                  <span className="ml-8">Flag &nbsp; {ranked4sFlag}</span>
                </li>
                <li className="ml-8">
                  <GiMissileSwarm className="gunfight -mb-5" />
                  <span className="ml-8">
                    Collaterals &nbsp; {ranked4sCollaterals}
                  </span>
                </li>
                <li className="ml-8">
                  <GiBattleTank className="gunfight -mb-5" />
                  <span className="ml-8">Teabags &nbsp; {ranked4sTeabags}</span>
                </li>
              </div>
            </ul>
          </section>

          <section className="w-4/5 mt-8">
            <h5 className="text-xl font-medium">Ranked 4v4 Match Stats</h5>
            <ul className="flex flex-wrap">
              <li>
                <GiLaurelsTrophy className="gunfight kdratio -mb-5" />
                <span className="ml-8">Wins &nbsp; {ranked4sWins}</span>
              </li>
              <li className="ml-8">
                <FaThumbsDown className="gunfight -mb-5" />
                <span className="ml-8">Losses &nbsp; {ranked4sLosses}</span>
              </li>
              <li>
                <GiStopwatch className="gunfight -mb-5 ml-8" />
                <span className="ml-16">
                  Time Played &nbsp; {ranked4sTimePlayed}
                </span>
              </li>

              <div className="mt-8 flex">
                <li className="ml-8">
                  <ImSigma className="gunfight -mb-5" />
                  <span className="ml-8">
                    Games Played &nbsp; {ranked4sGamesPlayed}
                  </span>
                </li>
                <li className="ml-8">
                  <FaPercentage className="gunfight -mb-5" />
                  <span className="ml-8">
                    Win Rate &nbsp; {ranked4sWlPercentage}
                  </span>
                </li>
                <li className="ml-8">
                  <GiStarMedal className="gunfight -mb-5" />
                  <span className="ml-8">4v4 Rank &nbsp; {rank4s}</span>
                </li>
              </div>
            </ul>
          </section>
        </section>
      </div>

        <img className="w-screen h-screen opacity-10 grayscale" src={require("../Icons-IMG/splitgatebg.jpg")} alt="" width="2000" height="1270" />
        </div>
    )
}

export default Details;