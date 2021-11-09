import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";

const SignUp = () => {
  return (
    <Box >
      <Grid container style={{ marginLeft: "-250px" }}>
        <Grid
          item
          xs={7}
          style={{ backgroundColor: "#1E3C49", height: "100vh" }}
        >
          <img
            src={logo}
            style={{
              width: "300px",
              height: "300px",
              margin: "20% 0px 16px 120px",
            }}
          />
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              color: "white",
              marginLeft: "120px",
            }}
          >
            Shop Smarter, Not Harder
          </Typography>
          <Typography
            style={{
              fontSize: "24px",
              marginLeft: "120px",
              marginTop: "12px",
              color: "white",
            }}
          >
            Virtual ring try-on
          </Typography>
        </Grid>
        <Grid item xs={5} container justifyContent="center" alignItems="center">
          <Box style={{ marginLeft: "250px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "36px",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Admin SignUp
            </Typography>
            <TextField
              id="Name"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
            />
            <TextField
              id="Phone-number"
              label="Phone number"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
            />
            <TextField
              id="Brand"
              label="Brand"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
            />
            <Button
              style={{
                backgroundColor: "#ff8989",
                color: "white",
                width: "100%",
                borderRadius: "30px",
                padding: "12px 0px",
              }}
            >
              Sign Up
            </Button>
            
              <Typography style={{ color: "#C8C8C8", marginTop: "15px",marginLeft:'380px' }}>
                Already have an account?
                <span style={{ color: "#FEDA7D",textDecorationLine:'underline' }} > Sign In</span>
              </Typography>
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignUp;
