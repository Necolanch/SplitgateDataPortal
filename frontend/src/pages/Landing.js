import React from "react";
import image from "../Icons-IMG/portalbg.png"
import { useNavigate } from "react-router-dom";

const user=JSON.parse(localStorage.getItem("user"));
const Landing = (props) => {
  const navigate = useNavigate();
  if(user){
    navigate("/home");
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center" >
      <div className="absolute w-screen h-screen grayscale opacity-5" style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>
      <h1 className="text-3xl font-bold text-white mt-6 z-10">Spligate Data Portal</h1>
      <button className=" bg-red-400 p-2 w-20 rounded-md mt-4 z-10" onClick={() => navigate("/signup")}>Signup</button>
      <button className=" bg-red-400 p-2 w-20 rounded-md mt-4 z-10" onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Landing;
