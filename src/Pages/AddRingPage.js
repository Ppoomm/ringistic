import React, { useState, useEffect } from "react";
import "../AddRingPage.css";
import "../App.css";
import HeadTable from "../Components/HeadTable";
import { makeStyles } from "@material-ui/styles";
import AddRingCard from "../Components/addRing/AddRingCard";
import Sidebar from "../Components/Sidebar";
import firebase from "firebase/compat";
import auth from "../firebase/index";
const useStyles = makeStyles({
  box: {
    padding: "36px",
  },
});

function AddRingPage() {
  const [ringInfo, setRingInfo] = useState(null);
  const user = auth.currentUser;
  const db = firebase.firestore();

  useEffect(() => {
    fetchRing();
  }, []);

  const fetchRing = () => {
    db.collection("formnewring")
      .where("userID", "==", user.uid)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          // console.log(doc.data());
          setRingInfo(doc.data());
        });
      });
  };
  

  const classes = useStyles();
  return !ringInfo ? (
    <div></div>
  ) : (
    <div className={classes.box}>
      <Sidebar />
      <HeadTable />
      <AddRingCard status={ringInfo.status} ringname={ringInfo.ringname} type={ringInfo.type} available={ringInfo.available} />
      <AddRingCard status="Published" />
      <AddRingCard status="Deleted" />
      <AddRingCard status="Published" />
      <AddRingCard status="Published" />
      <AddRingCard status="Published" />
    </div>
  );
}

export default AddRingPage;
