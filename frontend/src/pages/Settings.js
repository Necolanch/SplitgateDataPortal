import React, {useState, useEffect, useContext, useRef} from "react";

import SettingsNavigation from "../components/SettingsNavigation";
import { FirstNameInput, LeftInput, RightDisabledInput } from "../components/Input";
import { SettingsAvatar } from "../components/Avatar";

import {GamertagContext} from "../contexts/Gamertag"
import authHeader from "../services/authHeader";

import "../CSS/settings.css";

const Settings = () => {
  
  //const [password, setPassword] = useState("");
  const platform=useRef("");
  const alias = useRef("");
  const gt = useRef("");
  const [currentGt, setCurrentGt]=useState("")

  const {firstNameInput, lastNameInput, emailInput} = useContext(GamertagContext);
  const user=JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    const getUser = async () => {
      await fetch(`http://localhost:3001/users/${user.user_gt}`, {headers:authHeader()})
      .then(response=>response.json())
      .then(result=>{
        alias.current.value=result.alias;
        gt.current.value=result.gamertag;
        platform.current.value=result.platform;
        setCurrentGt(result.gamertag)
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

  const updateAccount = async (e, newAlias, gamertag, plat) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/users/${currentGt}`, {
      method:"PATCH",
      headers:{
        "Authorization":user.token,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        alias:newAlias,
        gamertag:gamertag,
        platform:plat
      })
    })
    .then(response=>response.json())
    .then(result=>{
      gt.current.value=result.gamertag;
        alias.current.value=result.alias;
        platform.current.value=result.platform;
        console.log(user);
        user["user_gt"]=result.gamertag;
        user["user_platform"]=result.platform;
        localStorage.setItem("user", JSON.stringify(user));
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

            <form onSubmit={e=>updateAccount(e, alias.current.value, gt.current.value, alias.current.value)} className="searchForm inputBorder absolute w-2/5 h-3/5 flex flex-col items-center top-1/4 left-1/4 ml-20 z-10 border">
              <div className="mt-40">
                <div className="flex mb-20">

                  <FirstNameInput label="Alias" reference={alias} />

                  <select ref={platform}>
                  <option>Select a platform</option>
                  <option>psn</option>
                  <option>xbl</option>
                  <option>steam</option>
                  </select>
                </div>

                <div className="flex">
                  <LeftInput label="Gamertag" reference={gt} />
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