import React from "react";
import {  Grid } from "@material-ui/core";
import CardDashboard from "../Components/Card";
import Header from "../Components/Header";
import "../DashboardPage.css"
import Sidebar from "../Components/Sidebar";


const DashboardPage = () => {

  return (
    <div className="dashboard-body">
    <Sidebar/>
    <Header/>
    
        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} spacing={2} className="Box">
            <CardDashboard Text1="+500" Text2="Add to Cart" />
          </Grid>
          <Grid item xs={12} sm={6} spacing={2} className="Box">
          <CardDashboard Text1="+150" Text2="Order" />
          </Grid>
          <Grid item xs={12} sm={6} spacing={2} className="Box">
            <CardDashboard Text1="+50" Text2="Pending" />
          </Grid>
          <Grid item xs={12} sm={6} spacing={2} className="Box">
            <CardDashboard Text1="+1K" Text2="Sold Out Product" />
          </Grid>
          
          


             

        </Grid>
        </div>
      
    
  );
};
export default DashboardPage;

