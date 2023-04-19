import React, { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";

const Login = (props) => {
  const [gamertag, setGamertag] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      authService.login(gamertag, password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Link to="/home" className="link">
        Home
      </Link>
      <form action="POST" onSubmit={handleLogin}>
        <label>Gamertag/SteamID:</label>
        <input
          type="text"
          name="gamertag"
          value={gamertag}
          onChange={(e) => setGamertag(e.target.value)}
        ></input>

        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
