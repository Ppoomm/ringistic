import React, { useState } from "react";
import Header from "../Components/Header";
import { Grid, Box, Typography } from "@material-ui/core";
import "./WeddingPage.css";
import wed1 from "../assets/images/wed1.png";
import wed2 from "../assets/images/wed2.png";
import Sidebar from "../Components/Sidebar";

const EngagementPage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="add-ring__card">
        <Grid container>
          <box>
            <img className="wedding1" src={wed1} alt="wed1" />
          </box>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Name</div>
              <div className="card-subhead">Heart shape</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Stock</div>
              <div className="card-subhead">20</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Sold Out</div>
              <div className="card-subhead">20</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Price</div>
              <div className="card-subhead">$1650</div>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="add-ring__card">
        <Grid container>
          <box>
            <img className="wedding2" src={wed2} alt="wed2" />
          </box>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Name</div>
              <div className="card-subhead">Heart shape</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Stock</div>
              <div className="card-subhead">20</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Sold Out</div>
              <div className="card-subhead">20</div>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <div className="card-head">Price</div>
              <div className="card-subhead">$1650</div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EngagementPage;
