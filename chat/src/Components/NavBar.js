import React from "react";
import { NavLink } from "react-router-dom";

import "./Css/NavBar.css";

const Home = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <NavLink to="/calls">
            <i className="fa-solid fa-phone"></i>
          </NavLink>
          <NavLink to="/chatlist">
            <i className="fa-solid fa-comment"></i>
          </NavLink>
          <NavLink to="/settings">
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Home;
