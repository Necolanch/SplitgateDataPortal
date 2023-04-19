import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const Signup = (props) => {
  const [alias, setAlias] = useState("");
  const [gamertag, setGamertag] = useState("");
  const [platform, setPlatform] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      authService.signup(alias, gamertag, platform, password);
      navigate("/login");
    } catch (error) {
      return error
    }
  };
  return (
    <div>
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
        <input
          type="text"
          name="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        ></input>

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
