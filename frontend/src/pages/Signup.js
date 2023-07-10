import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../Icons-IMG/portalbg.png"
import authService from "../services/auth.service";

const Signup = (props) => {
  const [alias, setAlias] = useState("");
  const [gamertag, setGamertag] = useState("");
  const platform=useRef("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const signupForm =document.querySelector(".signup");
    const error = document.createElement("div");
    const lastChild = signupForm.lastChild;
    if (lastChild.className.includes("error")) {
      signupForm.removeChild(lastChild) 
    }
    if (platform.current.value!=="xbl" && platform.current.value!=="psn" && platform.current.value!=="steam"){
      console.log("Supposed to not work");
      error.className="error flex items-center ml-8";
      error.innerHTML=`<img class="errorIcon" src=${require("../Icons-IMG/error.png")} alt="" width="35" height="35"/> <span class="errorMessage text-red-500 ml-4">PLATFORM NOT FOUND</span>`;
      signupForm.append(error);
  } else{
    try {
      await authService.signup(alias, gamertag, platform.current.value, password);
      navigate("/home");
    } catch (error) {
      return error
    }
  }
  };
  return (
    <div className="signup w-screen h-screen flex flex-col items-center">
      <div className="absolute w-screen h-screen grayscale opacity-5" style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>
      <form action="POST" onSubmit={handleSignup} className="h-screen flex flex-col items-center justify-center z-10">
        <label className="text-blue-300 mt-4">Alias:</label>
        <input
          className="p-2"
          type="text"
          name="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        ></input>

        <label className="text-blue-300 mt-4">Gamertag/SteamID:</label>
        <input
          type="text"
          name="gamertag"
          value={gamertag}
          onChange={(e) => setGamertag(e.target.value)}
        ></input>

        <label className="text-blue-300 mt-4">Platform:</label>
        <select ref={platform}>
          <option>Select a platform</option>
          <option>psn</option>
          <option>xbl</option>
          <option>steam</option>
        </select>

        <label className="text-blue-300 mt-4">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button className=" bg-red-400 p-2 w-20 rounded-md mt-4" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
