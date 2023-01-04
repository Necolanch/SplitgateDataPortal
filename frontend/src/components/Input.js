import React, {useContext} from "react";

import { GamertagContext } from "../contexts/Gamertag";

const FirstNameInput = props => {
  const {firstNameInput}=useContext(GamertagContext);

  return(
      <div className="flex flex-col text-center mr-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="searchInput p-1" defaultValue={props.value} ref={firstNameInput} />
                  </div>
                </div>
  )
}

const LastNameInput = props => {
  const {lastNameInput}=useContext(GamertagContext);

  return(
      <div className="flex flex-col text-center ml-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="searchInput p-1" defaultValue={props.value} ref={lastNameInput} />
                  </div>
                </div>
  )
}

const EmailInput = props => {
  const {emailInput}=useContext(GamertagContext);

  return(
      <div className="flex flex-col text-center mr-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="searchInput p-1" defaultValue={props.value} ref={emailInput} />
                  </div>
                </div>
  )
}

const LeftInput = props => {

    return(
        <div className="flex flex-col text-center mr-10">
                    <label className="uppercase text-white">{props.label}</label>
                    <div className="inputBorder border p-2">
                      <input className="searchInput p-1" defaultValue={props.value} />
                    </div>
                  </div>
    )
}

const RightInput = props => {

    return(
        <div className="flex flex-col text-center ml-10">
                    <label className="uppercase text-white">{props.label}</label>
                    <div className="inputBorder border p-2">
                      <input className="searchInput p-1" defaultValue={props.value} />
                    </div>
                  </div>
    )
}

const RightDisabled = props => {

    return(
        <div className="flex flex-col text-center ml-10">
                    <label className="uppercase text-white">{props.label}</label>
                    <div className="inputBorder border p-2">
                      <input className="disabled p-1" defaultValue={props.value} disabled></input>
                    </div>
                  </div>
    )
}

export {FirstNameInput, LastNameInput, EmailInput, LeftInput, RightInput, RightDisabled};