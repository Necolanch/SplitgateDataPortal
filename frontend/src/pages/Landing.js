import React from "react";
import { useNavigate } from "react-router-dom";

const user=JSON.parse(localStorage.getItem("user"));
const Landing = (props) => {
  const navigate = useNavigate();
  if(user){
    navigate("/home");
  }
  return (
    <div>
      <h1 className="absolute text-3xl font-bold text-white ml-40 mt-6">
        Spligate Data Portal
      </h1>
      <button onClick={() => navigate("/signup")}>Signup</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Landing;
