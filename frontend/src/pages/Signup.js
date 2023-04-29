import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      authService.signup(alias, gamertag, platform.current.value, password);
      navigate("/login");
    } catch (error) {
      return error
    }
  }
  };
  return (
    <div className="signup">
      <Link to="/home" className="link">
        Home
      </Link>
      <form action="POST" onSubmit={handleSignup}>
        <label>Alias:</label>
        <input
          type="text"
          name="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        ></input>

        <label>Gamertag/SteamID:</label>
        <input
          type="text"
          name="gamertag"
          value={gamertag}
          onChange={(e) => setGamertag(e.target.value)}
        ></input>

        <label>Platform:</label>
        <select ref={platform}>
          <option>Select a platform</option>
          <option>psn</option>
          <option>xbl</option>
          <option>steam</option>
        </select>

        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
