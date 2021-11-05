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

export default function AddNewRing(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} fullWidth maxWidth="lg">
      <DialogTitle>
        <div style={{fontWeight:'bold',fontSize:'22px'}}>Add new ring</div>
      </DialogTitle>
      <DialogContent>
        <TextField
          id="standard-search"
          label="Ring name"
          type="search"
          variant="standard"
          fullWidth
        />
        <TextField
          id="standard-search"
          label="Description"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
        />
        <TextField
          id="standard-search"
          label="Price"
          type="search"
          variant="standard"
          fullWidth
          style={{ marginTop: "15px" }}
        />

        <div style={{ marginTop: "20px", marginBottom: "20px",fontWeight:'bold',fontSize:'18px' }}>Ring file</div>
        <DropzoneArea onChange={(files) => console.log("Files:", files) }  />
        <Box
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" style={{backgroundColor:'#ff8989',color:'white',borderRadius:'30px',padding:'15px 40px'}}>upload</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
