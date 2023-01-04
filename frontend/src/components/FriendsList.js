import React, {useEffect, useState, useRef, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {MdDelete} from "react-icons/md";

import { GamertagContext } from "../contexts/Gamertag";

const FriendsList = props => {
    const [friends, setFriends]=useState([]);
    const [friendSearched, setFriendSearched]=useState(false);
    const newFriend = useRef("");
    const navigate = useNavigate();

    const {setSearchGamertag, setSearchSeason}=useContext(GamertagContext);

    useEffect(()=>{
        const findFriends = async() =>{
            await fetch(`http://localhost:3001/friends`)
            .then(response=>response.json())
            .then(result=>{
                setFriends(result);
            });
        };
        findFriends();
    }, []);

    const findFriends = async () =>{
        await fetch(`http://localhost:3001/friends`)
        .then(response=>response.json())
        .then(result=>{
            setFriends(result);
        });
    };

    const addFriend = async (gt, e) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/friends`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                gamertag:gt
            })
        })
        .then(newFriend.current.value="")
        .catch(err=>{
            throw Error (err.message)
        })
        findFriends();
    }

    const deleteFriend = async (gt,e) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/friends/${gt}`, {
            method:"DELETE"
        })
        .then()
        .catch(err=>{
            throw Error (err.message);
        })
        findFriends();
    }

    const searchFriend = async (gt, season, e) => {
        e.preventDefault()
        setSearchGamertag(gt);
        setSearchSeason(parseInt(season));
        await fetch(`http://localhost:3001/search/${gt}/${season}`)
        .then(response=>response.json())
        .then(result=>{
            if (result.message) {
              if (document.querySelector(".error")) {
                return null;
              } else {
              const error = document.createElement("div");
              error.className="error flex items-center mt-8";
              error.innerHTML=`<img class="errorIcon" src=${require("../Icons-IMG/error.png")} alt="" width="35" height="35"/> <span class="errorMessage text-red-500 ml-4">PLAYER NOT FOUND</span>`;
              document.querySelector(".searchForm").appendChild(error);
              }
            } else{
              setFriendSearched(true)
            }
          })
    }

    useEffect(()=>{
        if (friendSearched===true) {
            navigate("/result");
        }
      }, [friendSearched, navigate])

    return (
        <form onSubmit={e=>addFriend(newFriend.current.value, e)} className="friendsSearch absolute w-1/6 h-auto flex flex-col items-center mt-40 ml-24 top-2/4 left-3/4 bg-black/20 text-white rounded-md z-10 cursor-default">
                <h5 className="my-4 text-lg font-medium">Friends List</h5>
                <ul className="friendsList w-full h-24 pl-4 mb-4 overflow-auto">
                    {
                        friends.map((friend, key)=>{
                            return (
                            <div key={key} className="flex">
                            <li className="friend w-full mr-6 pl-2 pr-2" onClick={e=>searchFriend(friend.gamertag, 2, e)}>{friend.gamertag}</li>
                            <MdDelete className="w-6 h-6 mr-4 hover:bg-black/40 hover:cursor-pointer" onClick={e=>deleteFriend(friend.gamertag, e)}/>
                            </div>
                            )
                        })
                    }
                </ul>
                <div className="inputBorder border h-auto p-2 mb-4">
                <input className="searchInput text-black" ref={newFriend}/>
                </div>
                <div className="inputBorder border p-1 mb-4">
                <button className="searchButton p-1">Add Friend</button>
                </div>
            </form>
    )
}

export default FriendsList;