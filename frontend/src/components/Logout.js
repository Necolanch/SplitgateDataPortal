import {React} from "react";

const Logout =()=>{
    const logout=()=>{
        localStorage.removeItem("user")
    }
    return(<button className="absolute flex justify-self-end" onClick={logout}>Logout</button>)
}

export default Logout;