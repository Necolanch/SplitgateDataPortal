import React, {useContext} from "react";

import { GamertagContext } from "../contexts/Gamertag";

const FirstNameInput = props => {

  return(
      <div className="flex flex-col text-center mr-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="searchInput p-1" ref={props.reference} />
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
                    <input className="searchInput p-1" ref={lastNameInput} />
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
                      <input className="searchInput p-1" ref={props.reference} />
                    </div>
                  </div>
    )
}

const LeftDisabled = props => {

  return(
      <div className="flex flex-col text-center mr-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="disabled p-1" defaultValue={props.value}></input>
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

const RightDisabledInput = props => {

  return(
      <div className="flex flex-col text-center ml-10">
                  <label className="uppercase text-white">{props.label}</label>
                  <div className="inputBorder border p-2">
                    <input className="disabled searchInput p-1" defaultValue={props.value} disabled></input>
                  </div>
                </div>
  )
}

const RightDisabledPassword = props => {

    return(
        <div className="flex flex-col text-center ml-10">
                    <label className="uppercase text-white">{props.label}</label>
                    <div className="inputBorder border p-2">
                      <input className="disabled p-1" type="password" defaultValue={props.value} disabled></input>
                    </div>
                  </div>
    )
}

export {FirstNameInput, LastNameInput, EmailInput, LeftInput, LeftDisabled, RightInput, RightDisabledInput, RightDisabledPassword};