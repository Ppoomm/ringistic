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

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    db.collection("user")
      .where("uid", "==", user.uid)
      .get()
      .then((snapshot) => {
        let profilePic = [];
        snapshot.docs.forEach((doc) => {
          const userDoc = doc.data();
          const proImageList = userDoc.imageList.filter(
            (url) =>
              url.includes("jpg") || url.includes("jpeg") || url.includes("png")
          );
         console.log(proImageList[0])
         profilePic.push({
            ...userDoc,
            imgUrl: proImageList[0],
          });
          setCurUser(userDoc);
        });
      });
  };
  
  return !curUser ? (
    <div></div>
  ) : (
    <Box>
      <Sidebar />
      <div
        style={{ fontSize: "30px", fontWeight: "bold", margin: "40px 250px" }}
      >
        Profile
      </div>
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
                  margin: "105px 100px",
                  borderRadius: "300px",
                  width: "150px",
                  height: "150px",
                }}
                src={curUser.imageList[0] ?? wed1}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div
                  style={{
                    fontSize: "30px",
                  
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Name :{" "}
                  <span style={{ color: "black" }}>
                    {curUser.FirstName} {curUser.LastName}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "30px",
                   
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Brand :{" "}
                  <span style={{ color: "black" }}>{curUser.Brand}</span>
                </div>
                <div
                  style={{
                    fontSize: "30px",
                  
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Total ring :{" "}
                  <span style={{ color: "black" }}>{curUser.TotalRing}</span>
                </div>
                <div
                  style={{
                    fontSize: "30px",
                   
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Phone number:{" "}
                  <span style={{ color: "black" }}>{curUser.Phonenumber}</span>
                </div>
                <div
                  style={{
                    fontSize: "30px",
                    
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Email: <span style={{ color: "black" }}>{curUser.Email}</span>
                </div>
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
