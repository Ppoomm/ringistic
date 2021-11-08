import React,{useState} from "react";
import { Typography, Box, Paper, Grid, Button } from "@material-ui/core";
import wed1 from "../assets/images/wed1.png";
import EditIcon from "@material-ui/icons/Edit";
import EditPopup from "../Components/EditProfile/EditPopup";
import Sidebar from "../Components/Sidebar";
const ProfilePage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box>
      <Sidebar />
      <Typography
        style={{ fontSize: "30px", fontWeight: "bold", margin: "40px 250px" }}
      >
        Profile
      </Typography>
      <Paper style={{ height: "300px", margin: "50px 400px",backgroundColor:'#fbfbfb'}}>
        <Grid container spacing={2}>
          <Grid item style={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <img
                style={{
                  backgroundColor: "black",
                  margin: "30px 100px",
                  borderRadius: "300px",
                  width: "150px",
                  height: "150px",
                }}
                src={wed1}
              />
            </Box>
            <Typography
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginLeft: "100px",
              }}
            >
              name here
            </Typography>
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
                  Brand : <span style={{ color: "black" }}>Ringistic</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Total ring : <span style={{ color: "black" }}>240</span>
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
                  <span style={{ color: "black" }}>0812345679</span>
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#828282",
                    marginTop: "20px",
                  }}
                >
                  Email: <span style={{ color: "black" }}>gmail@gmail.com</span>
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
