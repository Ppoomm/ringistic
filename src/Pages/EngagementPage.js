import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Grid, Box, Typography } from "@material-ui/core";
import "./InformationRing.css";
import wed1 from "../assets/images/wed1.png";
import wed2 from "../assets/images/wed2.png";
import Sidebar from "../Components/Sidebar";
import firebase from "firebase/compat";
import auth from "../firebase/index";

const EngagementPage = () => {
  const [ringInfo, setRingInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const db = firebase.firestore();
  useEffect(() => {
    fetchRing();
  }, []);

  const fetchRing = () => {
    setIsLoading(true);
    const ringCollection = db
      .collection("formnewring")
      .where("userID", "==", user.uid);
    const getRing = ringCollection.where("type", "==", "engagement ring");
    getRing
      .where("status", "==", "Published")
      .get()
      .then((snapshot) => {
        let ringList = [];
        snapshot.docs.forEach((doc) => {
          const ringDoc = doc.data();

          const ringImageList = ringDoc.imageList.filter(
            (url) => url.includes("jpg") || url.includes("jpeg") || url.includes("png")
          );

          ringList.push({
            ...ringDoc,
            imgUrl: ringImageList[0],
          });
        });
        console.log(ringList);
        setRingInfo(ringList);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <div
              style={{
                fontWeight: "bold",
                marginTop: "50px",
                fontSize: "32px",
              }}
            >
              Ring Overview
            </div>
          </Box>
        </Grid>
      </Grid>
      {!isLoading && ringInfo.length > 0 ? (
        ringInfo.map((ring) => (
          <div>
            <div className="inforRing">
              <Grid container>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      className="wedding1"
                      src={ring.imgUrl ?? wed1}
                      alt="wed1"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <div className="card-head">Name</div>
                    <div className="card-subhead">{ring.ringname}</div>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <div className="card-head">Stock</div>
                    <div className="card-subhead">{ring.available}</div>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <div className="card-head">Sold Out</div>
                    <div className="card-subhead">-</div>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <div className="card-head">Price</div>
                    <div className="card-subhead">$ {ring.price}</div>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        ))
      ) : (
        <Typography style={{ textAlign: "center", marginTop: "200px" }}>
          Don't have ring
        </Typography>
      )}
    </div>
  );
};

export default EngagementPage;
