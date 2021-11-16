import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logo from "../assets/images/logo.png";
import "../Images.css";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Button, Grid } from "@material-ui/core";
import auth from "../firebase";
import AuthContextProvider, { AuthContext } from "../context/context";
const Sidebar = () => {
  const authContext = useContext(AuthContext)
  const location = useLocation();
  return (
    <div className="Sidebar">
      <div>
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
        </div>
      </div>

      <div >
        <Button
          style={{
            backgroundColor: "#15012E",
            color: "white",
            width: "100%",
            padding: "12px 0px",
            bottom: "0px",
          }}
          onClick={() => {
            auth.signOut().then(() => {
              // setSession({
              //   isLoggedIn: false,
              //   currentUser: null,
              // });
              authContext.logout();
            })
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
