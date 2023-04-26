import React, {useState, useEffect, useContext} from "react";

import SettingsNavigation from "../components/SettingsNavigation";
import { FirstNameInput, LeftDisabled, RightDisabledInput, RightDisabledPassword } from "../components/Input";
import { SettingsAvatar } from "../components/Avatar";

import {GamertagContext} from "../contexts/Gamertag"
import authHeader from "../services/authHeader";

import "../CSS/settings.css";

const Settings = () => {
  
  //const [password, setPassword] = useState("");
  const [platform, setPlatform] = useState("");
  const [alias, setAlias] = useState("");
  const [gt, setGt] = useState("");

  const {firstNameInput, lastNameInput, emailInput} = useContext(GamertagContext);
  const user=JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    const getUser = async () => {
      await fetch(`http://localhost:3001/users/${user.user_gt}`, {headers:authHeader()})
      .then(response=>response.json())
      .then(result=>{
        setGt(result.gamertag);
        setAlias(result.alias);
        setPlatform(result.platform);
        //setPassword(result.password)
      })
      .catch(err=>{
        throw Error(err.message);
      })
    }
    return ()=>{
      getUser();
    };
  }, [gt])

  const updateAccount = async (e, newAlias) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/users/${gt}`, {
      method:"PATCH",
      headers:{
        "Authorization":user.token,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        alias:newAlias
      })
    })
    .then(response=>response.json())
    .then(result=>{
      setGt(result.gamertag);
        setAlias(result.alias);
        setPlatform(result.platform);
        const form = document.querySelector(".searchForm");
        const success = document.createElement("p");
        success.innerText="Account updated";
        form.appendChild(success);
    })
    .catch(err=>{
      throw Error(err.message);
    })
  }

    return(
        <div>
            <SettingsNavigation/>

            <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">Halo Fakepoint</h1>
            
            <h3 className="absolute w-screen text-center text-3xl uppercase font-semibold text-white mt-16">Settings</h3>

            <form onSubmit={e=>updateAccount(e, firstNameInput.current.value)} className="searchForm inputBorder absolute w-2/5 h-3/5 flex flex-col items-center top-1/4 left-1/4 ml-20 z-10 border">
              <div className="mt-40">
                <div className="flex mb-20">

                  <FirstNameInput label="Alias" value={alias} />

                  <RightDisabledInput label="Platform" value={platform} />
                </div>

                <div className="flex">
                  <LeftDisabled label="Gamertag" value={gt} />
                </div>

              </div>

              <div className="inputBorder border p-2 mt-20">
              <button className="submitButton w-24 p-2 text-lg">Submit</button>
              </div>
            </form>

            <img className="w-screen h-screen opacity-10 grayscale" src={require("../Icons-IMG/splitgatebg.jpg")} alt="" width="2000" height="1270" />
        </div>
    )
}

export default Settings;