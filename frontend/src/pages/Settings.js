import React, {useState, useEffect, useContext} from "react";

import SettingsNavigation from "../components/SettingsNavigation";
import { FirstNameInput, LastNameInput, EmailInput, RightDisabled } from "../components/Input";
import { SettingsAvatar } from "../components/Avatar";

import {GamertagContext} from "../contexts/Gamertag"

import "../CSS/settings.css";

const Settings = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gt, setGt] = useState("");

  const {gamertag, firstNameInput, lastNameInput, emailInput} = useContext(GamertagContext);

  useEffect(()=>{
    const getUser = async () => {
      await fetch(`http://localhost:3001/users/${gamertag.current}`)
      .then(response=>response.json())
      .then(result=>{
          if(result===null){
            fetch(`http://localhost:3001/users`, {
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  firstName:"Nicholas",
                  lastName:"Cruz",
                  email:"necolynche@gmail.com",
                  gamertag:gamertag.current
                })
              })
              .then(response=>response.json())
              .then(result=>{
                setFirstName(result.firstName);
                setLastName(result.lastName);
                setGt(result.gamertag);
                setEmail(result.email);
              })
              .catch(err=>{
                throw Error(err.message);
              })
          } else{
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setGt(result.gamertag);
        setEmail(result.email);
        }
      })
      .catch(err=>{
        throw Error(err.message);
      })
    }
    return ()=>{
      getUser();
    };
  }, [gamertag])

  const updateAccount = async (e, first, last, email) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/users/${gt}`, {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName:first,
        lastName:last,
        email:email,
        gamertag:gt
      })
    })
    .then(response=>response.json())
    .then(result=>{
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmail(result.email);
    })
    .catch(err=>{
      throw Error(err.message);
    })
  }

    return(
        <div>
            <SettingsNavigation/>

            <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">Halo Fakepoint</h1>
            <SettingsAvatar/>
            

            <h3 className="absolute w-screen text-center text-3xl uppercase font-semibold text-white mt-16">Settings</h3>

            <form onSubmit={e=>updateAccount(e, firstNameInput.current.value, lastNameInput.current.value, emailInput.current.value)} className="searchForm inputBorder absolute w-2/5 h-3/5 flex flex-col items-center top-1/3 left-1/4 ml-20 z-10 border">
              <div className="mt-40">
                <div className="flex mb-20">

                  <FirstNameInput label="First Name" value={firstName} />

                  <LastNameInput label="Last Name" value={lastName} />
                </div>

                <div className="flex">

                  <EmailInput label="Email" value={email} />

                  <RightDisabled label="Gamertag" value={gt} />
                </div>

              </div>

              <div className="inputBorder border p-2 mt-20">
              <button className="submitButton w-24 p-2 text-lg">Submit</button>
              </div>
            </form>

            <img className="w-screen h-screen opacity-10 grayscale" src={require("../Icons-IMG/background.jpg")} alt="" width="2000" height="1270" />
        </div>
    )
}

export default Settings;