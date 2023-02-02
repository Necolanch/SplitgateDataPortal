import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ShepherdTour, TourMethods } from "react-shepherd";
import Start from "../components/Start";

import HomeNavigation from "../components/HomeNavigation";
import authHeader from "../services/authHeader";
import { Avatar } from "../components/Avatar";

import {
  GiDeathSkull,
  GiTargeted,
  GiStopwatch,
  GiLaurelsTrophy,
  GiStarMedal,
} from "react-icons/gi";
import { FaPercentage } from "react-icons/fa";

import "../CSS/home.css";
import "shepherd.js/dist/css/shepherd.css";

const tourOptions = {
  useModalOverlay: true,
  keyboardNavigation: false,
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    when: {
      cancel: () => {
        const body = document.querySelector("body");
        const children = [...body.children];
        children.forEach((child) =>
          child.classList.remove("shepherd-modal-is-visible")
        );
      },
      complete: () => {
        const body = document.querySelector("body");
        const children = [...body.children];
        children.forEach((child) =>
          child.classList.remove("shepherd-modal-is-visible")
        );
      },
    },
  },
};

const steps = [
  {
    id: "intro",
    buttons: [
      {
        classes: "shepherd-button-secondary",
        text: "Exit",
        type: "cancel",
      },
      {
        classes: "halo-button",
        text: "Begin",
        type: "next",
      },
    ],
    text: [
      "Welcome to Halo Fakepoint! A mock of Halo Waypoint developed by Nicholas Cruz connecting to the HaloDotAPI for in game stats. This guide will highlight some key areas of the website for you.",
    ],
  },
  {
    id: "second",
    attachTo: {
      element: ".overview",
      on: "left",
      highlightClass: "attach",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: [
      "This is a small overview welcoming you specifically on your account to the website. It highlights some hand-chosen statistics you might like to see.",
    ],
  },
  {
    id: "navigation",
    attachTo: {
      element: ".navigation",
      on: "right",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: [
      "This is the navigation for the website with a total of 4 different page views.",
    ],
  },
  {
    id: "home",
    attachTo: {
      element: ".home",
      on: "right",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: ["This is the Dashboard which is the current page we are on."],
  },
  {
    id: "search",
    attachTo: {
      element: ".search",
      on: "right",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: [
      "This is the Search page. You can search stats of any player with a Halo Infinte account and by specific season. Here you can also create a friends list. Just type in the gamertag of your friend and they are in your friends list. When you click on a friend's gamertag you added, it searches their stats of the current season.",
    ],
  },
  {
    id: "settings",
    attachTo: {
      element: ".settings",
      on: "right",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: [
      "This is the Settings page where you can adjust settings to your account.",
    ],
  },
  {
    id: "details",
    attachTo: {
      element: ".details",
      on: "right",
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    text: [
      "This is the Details page. This is where you will go to find all of your personal stats.",
    ],
  },
  {
    id: "finish",
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Finish",
        type: "complete",
      },
    ],
    text: [
      "That is all for the tour. I hope you enjoy the website fellow Spartans!",
    ],
  },
];

const Home = (props) => {
  const [kills, setKills] = useState([]);
  const [headshots, setHeadshots] = useState([]);
  const [timePlayed, setTimePlayed] = useState([]);
  const [wins, setWins] = useState([]);
  const [teabags, setTeabags] = useState([]);
  const [rank, setRank] = useState([]);
  const [gamertag, setGamertag] = useState([]);
  const navigate=useNavigate();

  const user=JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    const getStats = async () => {
      await fetch(`http://localhost:3001/${user.user_platform}/${user.user_gt}`, { headers: authHeader() })
        .then((response) => response.json())
        .then((result) => {
          const overall = result.data.segments.find(
            (obj) => obj.type === "overview"
          );
          const ranked4v4 = result.data.segments.find(
            (obj) => obj.metadata.name === "Ranked 4v4"
          );
          const setAll = () => {
            setKills(overall.stats.kills.displayValue);
            setHeadshots(overall.stats.headshotKills.displayValue);
            setTimePlayed(overall.stats.timePlayed.displayValue);
            setWins(overall.stats.wins.displayValue);
            setTeabags(overall.stats.teabags.displayValue);
            setRank(ranked4v4.stats.rankLevel.metadata.rankName);
            setGamertag(result.data.platformInfo.platformUserHandle);
          };
          setAll();
        });
    };
    if (user && user.token) {
      getStats();
    } else {
      navigate("/")
    }
    return;
  }, []);

  return (
    <ShepherdTour steps={steps} tourOptions={tourOptions}>
      <TourMethods>
        {(tourContext) => <Start startTour={tourContext} />}
      </TourMethods>
      <div className="wrapper h-screen">
        <HomeNavigation />
        <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">
          Spligate Data Portal
        </h1>
        <Avatar />
        <section className="overview absolute left-2/4 w-2/5 text-white flex justify-end mt-72 text-xl z-10">
          <h3 className="-mt-32 text-2xl font-semibold">
            Welcome <span className="serviceTag">{gamertag}</span>!
          </h3>
          <div className="-mt-10 -mr-64 text-2xl font-semibold underline uppercase">
            Overview
          </div>
          <ul className="text-right mr-28">
            <li className="mb-4">
              <GiDeathSkull className="skull -mb-6 ml-12" />
              Kills &nbsp; {kills}
            </li>
            <li className="mb-4">
              <GiTargeted className="headshots -mb-6" />
              Headshots &nbsp; {headshots}
            </li>
            <li className="mb-4">
              <GiStopwatch className="stopwatch -mb-6 -ml-12" />
              Time Played &nbsp; {timePlayed}
            </li>
          </ul>
          <ul className="">
            <li className="wins">
              {wins} &nbsp; Wins{" "}
              <GiLaurelsTrophy className="trophy -mt-7 ml-24" />
            </li>
            <li className="kd">
              {teabags} &nbsp; Teabags{" "}
              <FaPercentage className="percentage -mt-6 ml-32" />
            </li>
            <li className="rank">
              {rank} Rank <GiStarMedal className="medal -mt-6 ml-36" />
            </li>
          </ul>
        </section>
        <img
          className="bg w-screen h-screen opacity-10 grayscale"
          src={require("../Icons-IMG/background.jpg")}
          alt=""
          width="2000"
          height="1270"
        />
      </div>
    </ShepherdTour>
  );
};

export default Home;
