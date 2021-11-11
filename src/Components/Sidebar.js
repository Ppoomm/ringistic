import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logo from "../assets/images/logo.png";
import "../Images.css";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Button } from "@material-ui/core";
import auth from "../firebase"
const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="Sidebar">
      <div className="logo-box">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="icon-column">
        <div>
          {SidebarData.map((val, key) => {
            return (
              <Link
                key={key}
                className="row"
                to={val.Link}
                id={location.pathname === val.Link ? "active" : ""}
              >
                <div id="icon">{val.Icon}</div>{" "}
                <div id="title"> {val.title}</div>
              </Link>
            );
          })}
        </div>

        <Button
          style={{
            backgroundColor: "#ff8989",
            color: "white",
            width: "100%",
            borderRadius: "30px",
            padding: "12px 0px",
          }}
          // onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
