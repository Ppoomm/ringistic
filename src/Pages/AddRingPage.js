
import React from "react";
import "../AddRingPage.css";
import "../App.css";
import HeadTable from "../Components/HeadTable";
import { makeStyles } from "@material-ui/styles";
import AddRingCard from '../Components/addRing/AddRingCard'
import Sidebar from "../Components/Sidebar";

const useStyles = makeStyles({
  box: {
    padding: "36px"
  }
});

function AddRingPage() {
    const classes = useStyles();
  return (
    <div className={classes.box}>
      <Sidebar />
    
      <HeadTable />
      <AddRingCard status="Published"/>
      <AddRingCard status="Published"/>
      <AddRingCard status="Deleted"/>
      <AddRingCard status="Published"/>
      <AddRingCard status="Published"/>
      <AddRingCard status="Published"/>
  
      
    </div>
  );
}

export default AddRingPage;
