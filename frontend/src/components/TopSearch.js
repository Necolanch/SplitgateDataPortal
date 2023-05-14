import React, {useState, useEffect, useRef, useContext} from "react";
import { useNavigate } from "react-router-dom";

import { GamertagContext } from "../contexts/Gamertag";

import "../CSS/search.css";
import authHeader from "../services/authHeader";

const TopSearch = props => {
    const [playerSearched, setPlayerSearched]=useState(false);
    const navigate = useNavigate();
    const {setSearchGamertag, setSearchPlatform}=useContext(GamertagContext);

    const gamertag=useRef("");
    const season=useRef("");

    const searchPlayer = async(gt, platform, event) => {
        event.preventDefault();
        const searchForm =document.querySelector(".topSearchForm");
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

    return (
        <form onSubmit={event=>searchPlayer(gamertag.current.value, season.current.value, event)} className="topSearchForm absolute w-screen flex justify-center items-center mt-6 z-10">
            <div className="inputBorder border p-1">
                <input className="searchInput p-1" ref={gamertag}placeholder="Gamertag"></input>
            </div>
            <div className="inputBorder border p-1 ml-6 w-24">
                <select className="searchInput w-full p-1" ref={season}>
                <option>Select a platform</option>
                  <option>psn</option>
                  <option>xbl</option>
                  <option>steam</option>
                </select>
            </div>
            <div className="inputBorder border ml-6 p-1">
            <button className="searchButton p-1 w-20" type="submit">Search</button>
            </div>
        </form>
    )
}

export default TopSearch;