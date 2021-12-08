import React, { useState,useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import firebase from "firebase/compat";
import { v4 as uuid } from "uuid";
import auth from "../../firebase/index";

export default function EditRing(props) {
  const { title, children, openPopupEdit, setOpenPopupEdit,currentId } = props;
  const [ringName, setRingName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [ringInfo,setRingInfo]  = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const db = firebase.firestore();
 
  // Fetch ring with formRingId === currentId
  useEffect(() => {
    fetchRing();
  }, []);

  const fetchRing = () => {
    setIsLoading(true);
    db.collection("formnewring")
      .where("formRingId", "==", currentId)
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
   

  const handdleRingName = (e) => {
    setRingName(e.target.value);
  };
  const handdleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handdleType = (e) => {
    setType(e.target.value);
  };
  const handdlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handdleAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const handdleSummit = () => {
    const data = {
      userID: user.uid,
      ringname: ringName,
      description: description,
      type: type,
      price: price,
      available: available,
      status: "pending",
  formRingId: currentId
    };
    db.collection("formnewring")
      .doc(currentId)
      .update(data)
      .then(function () {
        setOpenPopupEdit(false);
        alert("Press ok to confirm");
      });
  };
  return (
    <Dialog open={openPopupEdit} fullWidth maxWidth="lg">
      <DialogTitle>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>
          Edit ring information
        </div>
      </DialogTitle>
      <DialogContent>
        <TextField
          id="ringName"
          label="Ring name"
          type="search"
          variant="standard"
          value={ringName}
          fullWidth
          onChange={handdleRingName}
        />
        <TextField
          id="description"
          label="Description"
          type="search"
          variant="standard"
          value={description}
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdleDescription}
        />

        <TextField
          id="price"
          label="Price"
          type="search"
          variant="standard"
          value={price}
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdlePrice}
        />
        <TextField
          id="available"
          label="Available"
          type="number"
          variant="standard"
          value={available}
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdleAvailable}
        />
        <FormControl fullWidth style={{ marginTop: "15px" }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handdleType}
          >
            <MenuItem value="diamond ring">diamond ring</MenuItem>
            <MenuItem value="wedding ring">wedding ring</MenuItem>
            <MenuItem value="engagement ring">engagement ring</MenuItem>
            <MenuItem value="dress ring">dress ring</MenuItem>
          </Select>
        </FormControl>

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
            onClick={() => setOpenPopupEdit(false)}
            style={{
              backgroundColor: "",
              color: "black",
              borderRadius: "30px",
              padding: "15px 40px",
              marginRight: "20px",
            }}
          >
            cancle
          </Button>
          <Button
            variant="contained"
            onClick={handdleSummit}
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
