import React, { Fragment } from "react";
import "../HeadTable.css";
import { Grid, Button, Box, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  searchInput: {
    width: "50%",
    borderRadius: "24px",
    color: "#828282",
    marginBottom: "16px",
  },

  button: {
    backgroundColor: "#FF8989",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "16px",
    textTransform: "capitalize",
  },
  searchIcon: {
    marginRight: "8px",
  },
  gridUnderline: {
    border: "1px solid black",
  },
});

const HeadTable = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box display="flex" justifyContent="center">
        <OutlinedInput
          id="time"
          placeholder="Search"
          className={classes.searchInput}
          startAdornment={<EditIcon classes={{ root: classes.searchIcon }} />}
        />
      </Box>
      <Box
        borderBottom={1}
        borderColor="grey.500"
        paddingY={2}
        display="flex"
        justifyContent="space-between"
      >
        <Grid container justify="center" alignItems="center">
          <Grid item md={3} className="card-heading">
            Title
          </Grid>
          <Grid item md={3} className="card-heading">
            Status
          </Grid>
          <Grid item md={3} className="card-heading">
            Available
          </Grid>
          <Grid item md={3}>
            <Box display="flex" justifyContent="center">
              <Button startIcon={<EditIcon />} className={classes.button}>
                Add New
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default HeadTable;
