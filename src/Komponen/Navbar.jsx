import React  from "react";
import './stylee.css';
import {  NavLink } from "react-router-dom";
import Search from "./Search";




function Head() {
  

  return (
    <div>
      <nav className="Navbar">
        <div id="Title">
          <h1> Ne<span>ws</span> </h1>
        </div>

        <div>
          <ul id="Fitur">
            <li> <NavLink to="/General"> General</NavLink> </li>
            <li> <NavLink to="/Sports"> Sports </NavLink> </li>
            <li> <NavLink to="/Technology"> Technology </NavLink> </li>
            <li> <NavLink to="/Scince"> Science </NavLink> </li>
          </ul>
        </div>

        <div>
          <Search/>
        </div>
      </nav>
    </div>
  );
}

export default Head;
  


