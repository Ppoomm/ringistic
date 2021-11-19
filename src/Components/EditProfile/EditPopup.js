import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import auth from "../../firebase/index";
import firebase from "firebase/compat";
export default function EditPopup(props) {
  const { openPopup, setOpenPopup } = props;
  const [curUser, setCurUser] = useState(null);
  const [Brand, setBrand] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [TotalRing, setTotalRing] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Email, setEmail] = useState("");
  const user = auth.currentUser;
  const db = firebase.firestore();
  const handdleBrand = (event) => {
    setBrand(event.target.value);
  };
  const handdleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handdleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handdleTotalRing = (event) => {
    setTotalRing(event.target.value);
  };
  const handdlePhonenumber = (event) => {
    setPhonenumber(event.target.value);
  };
  // const handdleEmail = (event) => {
  //   setEmail(user);
  // };
  
  const handdleEditUser = () => {
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Phonenumber: Phonenumber,
      Brand: Brand,
      Email: curUser.Email,
      TotalRing: TotalRing,
      uid: user.uid,
      role: "1",
    };
    db.collection("user")
      .doc(user.uid)
      .set(data)
      .then(function () {
        setOpenPopup(false);
        alert("Press ok to confirm");
        window.location.reload(false);
      });
  };
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
  console.log(curUser)

  return (
    <Dialog open={openPopup} fullWidth maxWidth="lg">
      <DialogTitle>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>Edit Profile</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          id="Brand"
          label="Brand"
          variant="standard"
          fullWidth
          onChange={handdleBrand}
        />
        <TextField
          id="FirstName"
          label="First Name"
          variant="standard"
          fullWidth
          onChange={handdleFirstName}
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="LastName"
          label="Last Name"
          variant="standard"
          fullWidth
          onChange={handdleLastName}
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="TotlalRing"
          label="Total ring"
          variant="standard"
          fullWidth
          onChange={handdleTotalRing}
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="Phonenumber"
          label="Phonenumber"
          variant="standard"
          fullWidth
          onChange={handdlePhonenumber}
          style={{ marginTop: "15px" }}
        />
        {/* <TextField
          id="Email"
          label="Email"
          type="search"
          variant="standard"
          fullWidth
          onChange={handdleEmail}
          style={{ marginTop: "15px" }}
        /> */}

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Picture
        </div>
        <DropzoneArea
          acceptedFiles={["image/*"]}
          onChange={(files) => console.log("Files:", files)}
        />
        <Box
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={handdleEditUser}
            style={{
              backgroundColor: "#ff8989",
              color: "white",
              borderRadius: "30px",
              padding: "15px 40px",
            }}
          >
            upload
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
