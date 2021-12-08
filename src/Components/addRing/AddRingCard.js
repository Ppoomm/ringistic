import React, { useState } from "react";
import "./AddRingCard.css";
import { Grid, Box, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import EditRing from "./EditRing";
import firebase from "firebase/compat";
import auth from "../../firebase/index";
import CheckIcon from '@material-ui/icons/Check';
const AddRingCard = ({ status, ringname, type, available, formRingId ,handleDelete,handleAccept}) => {
  const [openPopupEdit, setOpenPopupEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const user = auth.currentUser;
  const db = firebase.firestore();



  return (
    <div className="add-ring__card">
      <Grid container>
        <Grid item md={3}>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <div className="card-heading">{ringname}</div>
            <div className="card-subheading">{type}</div>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box display="flex" alignItems="center" className="box-full__height">
            <div
              className={`ring-status ring-status__${
                status === "Published"
                  ? "green"
                  : status === "Deleted"
                  ? "red"
                  : "yellow"
              }`}
            >
              {status}
            </div>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box display="flex" alignItems="center" className="box-full__height">
            <div className="card-heading">{available}</div>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <div>
              <IconButton
                onClick={() => {
                  setOpenPopupEdit(true);
                  setCurrentId(formRingId);
                }}
              >
                <EditIcon />
              </IconButton>
            </div>

            <IconButton onClick={() => handleDelete(formRingId)}>
              <DeleteOutlineIcon />
            </IconButton>
            <IconButton onClick={() => handleAccept(formRingId)}>
              <CheckIcon/>

            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <EditRing
        openPopupEdit={openPopupEdit}
        setOpenPopupEdit={setOpenPopupEdit}
        currentId={currentId}
      ></EditRing>
    </div>
  );
};

export default AddRingCard;
