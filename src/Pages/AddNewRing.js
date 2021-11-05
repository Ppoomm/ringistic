import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import "./AddNewRing.css";

export const AddNewRing = () => {
  return (
    <div>
      <div className=" paper">
        <paper className="  paper-add">
          <p className=" head "> Add New Product</p>
          <div className="hr-line" />
          <p className="head">Name</p>
          <input className=" input"></input>
          <p className="head">Desciption</p>
          <input className=" input"></input>
          <p className="head">Price</p>
          <input className=" input"></input>
          <p className="head">Ring file</p>
          
        </paper>
      </div>
    </div>
  );
};
