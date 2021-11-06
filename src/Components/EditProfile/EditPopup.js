import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

export default function EditPopup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} fullWidth maxWidth="lg" >
      <DialogTitle >
        <div style={{fontWeight:'bold',fontSize:'22px'}}>Edit Profile</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          id="standard-search"
          label="Brand"
          type="search"
          variant="standard"
          fullWidth
        />
        <TextField
          id="standard-search"
          label="Total ring"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="standard-search"
          label="Phone number"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="standard-search"
          label="Email"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
        />

        <div style={{ marginTop: "20px", marginBottom: "20px",fontWeight:'bold',fontSize:'18px' }}>Picture</div>
        <DropzoneArea acceptedFiles={["image/*"]} onChange={(files) => console.log("Files:", files) }  />
        <Box
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" onClick={() => setOpenPopup(false)} style={{backgroundColor:'#ff8989',color:'white',borderRadius:'30px',padding:'15px 40px'}}>upload</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
