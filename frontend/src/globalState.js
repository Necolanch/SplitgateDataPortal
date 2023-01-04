import {useRef, useState} from "react";

const GlobalState = () => {
    const gamertag = useRef("Necolanch");
    const [searchGamertag, setSearchGamertag]=useState("");
    const [searchPlatform, setSearchPlatform]=useState("");
    const firstNameInput = useRef("");
    const lastNameInput = useRef("");
    const emailInput = useRef("");

    return {
        gamertag,
        searchGamertag,
        searchPlatform,
        firstNameInput,
        lastNameInput,
        emailInput,
        setSearchGamertag, 
        setSearchPlatform
    }
}

export default GlobalState;