import React, { useState, useEffect } from "react";
import { Typography, Box, Paper, Grid, Button } from "@material-ui/core";
import wed1 from "../assets/images/wed1.png";
import EditIcon from "@material-ui/icons/Edit";
import EditPopup from "../Components/EditProfile/EditPopup";
import firebase from "firebase/compat";
import Sidebar from "../Components/Sidebar";
import auth from "../firebase/index";
const ProfilePage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [curUser, setCurUser] = useState(null);
  const user = auth.currentUser;
  const db = firebase.firestore();
  // console.log(user)
  // async function userProfile(db) {
  //   const userInfo = await db.collection("user").where("uid", "==", user.uid).get();
  //   return userInfo.docs.map(doc => {
  //     doc.data()
  //     console.log(doc)
  //   });
  //   console.log()
  // }

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    db.collection("user")
      .where("uid", "==", user.uid)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          setCurUser(doc.data());
        });
      });
  };

  return !curUser ? (
    <div></div>
  ) : (
    <Box>
      <Sidebar />
      <Typography
        style={{ fontSize: "30px", fontWeight: "bold", margin: "40px 250px" }}
      >
        Profile
      </Typography>
      <Paper
        style={{
          height: "350px",
          margin: "50px 300px",
          backgroundColor: "#fbfbfb",
        }}
      >
        <Grid container spacing={2}>
          <Grid item style={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <img
                style={{
                  backgroundColor: "black",
                  margin: "105px 100px",
                  borderRadius: "300px",
                  width: "150px",
                  height: "150px",
                }}
                src={wed1}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Name :{" "}
                  <span style={{ color: "black" }}>{curUser.FirstName} {curUser.LastName}</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Brand :{" "}
                  <span style={{ color: "black" }}>{curUser.Brand}</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Total ring :{" "}
                  <span style={{ color: "black" }}>{curUser.TotalRing}</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Phone number:{" "}
                  <span style={{ color: "black" }}>{curUser.Phonenumber}</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Email: <span style={{ color: "black" }}>{curUser.Email}</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ margin: "20px 50px" }}>
              <Button
                startIcon={<EditIcon />}
                variant="contained"
                style={{
                  backgroundColor: "#ff8989",
                  color: "white",
                  borderRadius: "30px",
                  padding: "15px 40px",
                }}
                onClick={() => setOpenPopup(true)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <EditPopup openPopup={openPopup} setOpenPopup={setOpenPopup}></EditPopup>
    </Box>
  );
};
export default ProfilePage;
