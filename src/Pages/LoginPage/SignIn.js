import React, { useState, useContext } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import auth from "../../firebase";
import { AuthContext } from "../../context/context";
import { Redirect } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const authContext = useContext(AuthContext);
  const handleLogin = async () => {
    console.log("signin");
    try{
    
    const response = await auth.signInWithEmailAndPassword(userName, passWord);
    const { user } = response;
    }catch(error){
      alert(error)
    }
   
  };
  if (authContext.isAuth) {
    return <Redirect to="/" />;
  }
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePassWord = (event) => {
    setPassWord(event.target.value);
  };

  
  return (
    <Box>
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
              Admin login
            </Typography>
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleUserName}
              style={{ marginBottom: "30px" }}
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={handlePassWord}
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
              onClick={handleLogin}
            >
              Sign in
            </Button>

            <Typography
              style={{
                color: "#C8C8C8",
                marginTop: "15px",
                marginLeft: "260px",
              }}
            >
              Don’t have an acccount ?
              <a href="/SignUp">
                <span
                  style={{ color: "#FEDA7D", textDecorationLine: "underline" }}
                >
                  {" "}
                  Sign Up
                </span>
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignIn;
