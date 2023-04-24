import React, {useState, useEffect, useRef, useContext} from "react";
import { useNavigate } from "react-router-dom";

import SearchNavigation from "../components/SearchNavigation";
import FriendsList from "../components/FriendsList";
import {Avatar} from "../components/Avatar";

import { GamertagContext } from "../contexts/Gamertag";

import "../CSS/search.css";
import authHeader from "../services/authHeader";

const Search = () => {
  const [playerSearched, setPlayerSearched]=useState(false);
  const navigate = useNavigate();
  const {setSearchGamertag, setSearchPlatform}=useContext(GamertagContext);

  //Make a function to be called that handles the form submission
  //When form is submitted, retrieve value from the search input and return Details page view
  //Fetch data from server/API with value from search input

  const gamertag=useRef("");
  const season=useRef("");

  const searchPlayer = async(gt, platform, event) => {
    event.preventDefault();
    const searchForm =document.querySelector(".searchForm");
    const lastChild = searchForm.lastChild;
    if (lastChild.className.includes("error")) {
      searchForm.removeChild(lastChild) 
    }
    const error = document.createElement("div");
    if (platform!=="xbl" && platform!=="psn" && platform!=="steam") {
        error.className="error flex items-center ml-8";
        error.innerHTML=`<img class="errorIcon" src=${require("../Icons-IMG/error.png")} alt="" width="35" height="35"/> <span class="errorMessage text-red-500 ml-4">PLATFORM NOT FOUND</span>`;
        searchForm.append(error);
    }
    setSearchGamertag(gt);
    setSearchPlatform(platform);
    await fetch(`http://localhost:3001/search/${platform}/${gt}`, {headers:authHeader()})
    .then(response=>response.json())
    .then(result=>{
      if (result.errors===undefined) {
        setPlayerSearched(true)
      } else if (result.errors[0].message) {
        if (document.querySelector(".error")) {
          return null;
        } else {
        error.className="error flex items-center ml-8";
        error.innerHTML=`<img class="errorIcon" src=${require("../Icons-IMG/error.png")} alt="" width="35" height="35"/> <span class="errorMessage text-red-500 ml-4">PLAYER NOT FOUND</span>`;
        searchForm.append(error);
        }
      }
    })
  }

useEffect(()=>{
  if (playerSearched===true) {
      navigate("/result");
  }
}, [playerSearched, navigate])

    return(
        <div className="wrapper h-screen">
            <SearchNavigation/>

            <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">Splitgate Data Portal</h1>

          <div className="search">
            <h3 className="absolute w-screen text-center text-3xl uppercase font-semibold text-white mt-16">Search</h3>
        
            <form onSubmit={event=>searchPlayer(gamertag.current.value, season.current.value, event)} className="searchForm absolute w-screen flex flex-col items-center mt-96 z-10">
            <p className="text-xl text-white font-medium">FIND STATS OF OTHER PLAYERS TO COMPARE TO YOURS</p>

              <div className="inputBorder w-1/2 h-24 border border-white flex justify-center items-center">
                <input className="searchInput w-11/12 h-16 p-2 text-2xl" ref={gamertag} placeholder="Gamertag (SteamID64 for Steam)" />
              </div>
              <div className="inputBorder w-1/6 h-24 mt-8 border border-white flex justify-center items-center">
                <input className="searchInput w-11/12 h-16 p-2 text-2xl" ref={season} placeholder="steam/xbl/psn" type="text"/>
              </div>

              <div className="inputBorder border p-2 mt-10">
                <button className="searchButton w-28 p-3 text-lg" type="submit">Search</button>
              </div>
            </form>

          <FriendsList/>
          </div>

            <img className="w-screen h-screen opacity-10 grayscale" src={require("../Icons-IMG/splitgatebg.jpg")} alt="" width="2000" height="1270" />
        </div>
    )
}

export default Search;