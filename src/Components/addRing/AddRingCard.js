import React from "react";
import "./AddRingCard.css";
import { Grid, Box, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";

const AddRingCard = ({ status,ringname,type,available }) => {
  

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
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddRingCard;
