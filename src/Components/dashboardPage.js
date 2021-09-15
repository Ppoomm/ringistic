import React, { useState } from "react";
import wedding from "../assets/images/wedding.jpg";
import dress from "../assets/images/dress.png";
import engagement from "../assets/images/engagement.jpg";
import diamond from "../assets/images/diamond.png";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

const DashboardPage = () => {
  return (
    <Grid
      container
      className="root"
      direction="row"
      alignItems="flex-start"
      spacing={4}
    >
      <Grid item xs={3}>
        <Paper elevation={0} className="paper">
          <div className="logo-box">
            <div className="logo">
              <img src={wedding} alt="wedding" />
            </div>
          </div>
          <Typography> Wedding Ring</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <Paper elevation={0} className="paper">
          <div className="logo-box">
            <div className="logo">
              <img src={engagement} alt="engagement" />
            </div>
          </div>
          <Typography> Engagement Ring</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <Paper elevation={0} className="paper">
          <div className="logo-box">
            <div className="logo">
              <img src={dress} alt="dress" />
            </div>
          </div>
          <Typography> Dress Ring</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <Paper elevation={0} className="paper">
          <div className="logo-box">
            <div className=" logo">
              <img src={diamond} alt="diamond" />
            </div>
          </div>
          <Typography> Diamond Ring</Typography>
        </Paper>
      </Grid>
      <div className="line"></div>
      <Grid container spacing={4} className=" ">
        <div className="dash-card">test</div>
      </Grid>
    </Grid>
  );
};
export default DashboardPage;
