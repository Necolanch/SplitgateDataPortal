import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../Icons-IMG/portalbg.png"
import authService from "../services/auth.service";

const Login = (props) => {
  const [gamertag, setGamertag] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(gamertag, password);
      navigate("/home")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="absolute w-screen h-screen grayscale opacity-5" style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>
      <form className="h-screen flex flex-col items-center justify-center z-10" action="POST" onSubmit={handleLogin}>
        <label className="text-blue-300 mt-4">Gamertag/SteamID:</label>
        <input
          type="text"
          name="gamertag"
          value={gamertag}
          onChange={(e) => setGamertag(e.target.value)}
        ></input>

        <label className="text-blue-300 mt-4">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button className=" bg-red-400 p-2 w-20 rounded-md mt-4" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
