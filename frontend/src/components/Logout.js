import {React} from "react";
import { useNavigate } from "react-router-dom";

const Logout =()=>{
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("user")
        navigate("/");
    }
    return(<button className="absolute flex justify-self-end" onClick={logout}>Logout</button>)
}

export default Logout;