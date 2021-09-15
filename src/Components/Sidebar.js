import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logo from "../assets/images/logo.png";
import "../Images.css";



function Sidebar() {
  return (

    <div className="Sidebar">
      <ul className="SidebarList">
        <div className = "logo">
          <img src={logo} alt="logo"/>
        </div>
        {SidebarData.map((val, key) => {
          return (
            <Link
              key={key}
              className="row"
              id={window.location.pathname === val.Link ? "active" : ""}
              to={val.Link}
            >
              <div id="icon">{val.Icon}</div> <div id="title"> {val.title}</div>
            </Link>
          );
        })}
      </ul>
      
    </div>
    
    
  );
}

export default Sidebar;
