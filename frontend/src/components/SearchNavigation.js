import React from "react";
import { Link } from "react-router-dom";

import "../CSS/home.css";

const SearchNavigation = () => {
  return (
    <nav className="navigation absolute h-screen flex-auto flex-col w-24 z-50">
      <Link to="/home">
        <img
          className="mx-auto mb-60 relative top-10 hover:cursor-pointer"
          src={require("../Icons-IMG/splitgate.png")}
          alt="UNSC logo"
          width="45"
          height="72"
        />
      </Link>

      <Link to="/home">
        <div className="home mx-auto w-fit hover:shadow-md hover:shadow-black/25 p-2 mb-10 rounded">
          <img
            className="home-icon"
            src={require("../Icons-IMG/Home-icon.png")}
            alt="Dashboard icon"
            width="36"
            height="36"
          />
        </div>
      </Link>

      <Link to="/search">
        <div className="search mx-auto w-fit mb-10 shadow-md shadow-black/25 p-2 rounded">
          <img
            className="search-icon"
            src={require("../Icons-IMG/search.png")}
            alt=""
            width="36"
            height="36"
          />
        </div>
      </Link>

      <Link to="/settings">
        <div className="settings mx-auto w-fit mb-10 hover:shadow-md hover:shadow-black/25 p-2 rounded">
          <img
            className="settings-icon"
            src={require("../Icons-IMG/settings.png")}
            alt=""
            width="36"
            height="36"
          />
        </div>
      </Link>

      <Link to="/details">
        <div className="details mx-auto w-12 mb-10 hover:shadow-md hover:shadow-black/25 p-2 rounded">
          <img
            className="details-icon mx-auto"
            src={require("../Icons-IMG/stats.png")}
            alt=""
            width="26"
            height="48"
          />
        </div>
      </Link>
    </nav>
  );
};

export default SearchNavigation;
