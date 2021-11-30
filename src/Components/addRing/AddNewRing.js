import React, { useState } from "react";
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
import { DropzoneArea } from "material-ui-dropzone";
import firebase from "firebase/compat";
import { v4 as uuid } from "uuid";
import auth from "../../firebase/index";
export default function AddNewRing(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const [ringFile, setRingFile] = useState([]);
  const [ringName, setRingName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const user = auth.currentUser;
  const db = firebase.firestore();
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
  for (const element of ringFile) {
    console.log(element.name);
  }

  const handdleSummit = async () => {
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
      imageList: imageUrlList
    };
    db.collection("formnewring")
      .doc(formRingId)
      .set(data)
      .then(function () {
        setOpenPopup(false);
        alert("Press ok to confirm");
      });
  };
  console.log(type);
  // console.log(ringFile)
  return (
    <Dialog open={openPopup} fullWidth maxWidth="lg">
      <DialogTitle>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>Add new ring</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          id="ringName"
          label="Ring name"
          type="search"
          variant="standard"
          fullWidth
          onChange={handdleRingName}
        />
        <TextField
          id="description"
          label="Description"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdleDescription}
        />

        <TextField
          id="price"
          label="Price"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdlePrice}
        />
        <TextField
          id="available"
          label="Available"
          type="number"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdleAvailable}
        />

        {/* <TextField
          id="type"
          label="Type"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
          onChange={handdleType}
        /> */}
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

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Ring file
        </div>
        <DropzoneArea
          acceptedFiles={[".obj", ".FBX", "image/*"]}
          maxFileSize={50000000000}
          filesLimit={3}
          dropzoneText={"Drag and drop .OBJ,FBX and image for cover"}
          showPreviewsInDropzone={true}
          showFileNames={true}
          onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
          onChange={(files) => {
            setRingFile(files);
          }}
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
            onClick={() => setOpenPopup(false)}
            style={{
              backgroundColor: "",
              color: "black",
              borderRadius: "30px",
              padding: "15px 40px",
              marginRight: "20px",
            }}
          >
            cancel
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
