import React, { useState, useEffect } from "react";
import "../AddRingPage.css";
import "../App.css";
import HeadTable from "../Components/HeadTable";
import { makeStyles } from "@material-ui/styles";
import AddRingCard from "../Components/addRing/AddRingCard";
import Sidebar from "../Components/Sidebar";
import firebase from "firebase/compat";
import auth from "../firebase/index";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  box: {
    padding: "36px",
  },
});

function AddRingPage() {
  const [ringInfo, setRingInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const db = firebase.firestore();

  useEffect(() => {
    fetchRing();
  }, []);

  const fetchRing = () => {
    setIsLoading(true);
    db.collection("formnewring")
      .where("userID", "==", user.uid)
      .get()
      .then((snapshot) => {
        let ringList = [];
        snapshot.docs.forEach((doc) => {
          ringList.push(doc.data());
        });

        setRingInfo(ringList);
        setIsLoading(false);
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Sidebar />
      <HeadTable />
      {!isLoading && ringInfo.length > 0 ? (
        ringInfo.map((ring) => (
          <AddRingCard
            status={ring.status}
            ringname={ring.ringname}
            type={ring.type}
            available={ring.available}
            formRingId={ring.formRingId}
          />
        ))
      ) : (
        <Typography style={{ textAlign: "center", marginTop: "200px" }}>
          Don't have ring
        </Typography>
      )}

      
    </div>
  );
}

export default AddRingPage;
