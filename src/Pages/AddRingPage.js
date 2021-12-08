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
import { v4 as uuid } from "uuid";
const useStyles = makeStyles({
  box: {
    padding: "36px",
  },
});

function AddRingPage() {
  const [ringInfo, setRingInfo] = useState([]);
  const [currentRing, setCurrentRing] = useState(null);
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

  const handleSubmit = async (
    ringFile,
    ringName,
    description,
    type,
    price,
    available
  ) => {
    const formRingId = uuid();

    let imageUrlList = [];
    for await (const element of ringFile) {
      const imageRef = firebase.storage().ref(user.uid).child(element.name);
      await imageRef.put(element);
      imageUrlList.push(await imageRef.getDownloadURL());
    }
    const data = {
      userID: user.uid,
      ringname: ringName,
      description: description,
      type: type,
      price: price,
      available: available,
      status: "pending",
      formRingId: formRingId,
      imageList: imageUrlList,
    };
    db.collection("formnewring").doc(formRingId).set(data);
    fetchRing();
  };

  const handleDelete = async (formRingId) => {
    await db
      .collection("formnewring")
      .doc(formRingId)
      .delete()
      .then(function () {
        fetchRing();
      });
  };

  const handleAccept = async (formRingId) => {
    console.log(formRingId, "RINGID");
    db.collection("formnewring")
      .where("formRingId", "==", formRingId)
      .get()
      .then((snapshot) => {
        let ringList = [];
        snapshot.docs.forEach((doc) => {
          ringList.push(doc.data());
        });

        db.collection("formnewring")
          .doc(formRingId)
          .update({
            ...ringList[0],
            status: "Published",
          })
          .then(function () {
            fetchRing();
          });
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Sidebar />
      <HeadTable handleSubmit={handleSubmit} />
      {!isLoading && ringInfo.length > 0 ? (
        ringInfo.map((ring) => (
          <AddRingCard
            handleDelete={handleDelete}
            handleAccept={handleAccept}
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
