import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import auth from "../../firebase/index"
import firebase from "firebase/compat";
import { Redirect } from "react-router-dom";
const SignUp = () => {
  const [isSignUp,setIsSignUp] = useState(null)
  const [Email, setEmail] = useState("");
  const [Password, setPassWord] = useState("");
  const [FirstName,setFirstName] = useState("");
  const [LastName,setLastName] = useState("");
  const [Phonenumber,setPhonenumber] = useState("");
  const [Brand,setBrand] = useState("");
  const db = firebase.firestore();
  const handdleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handdlePassword = (e) => {
    setPassWord(e.target.value)
  }
  const handdleAll = (e) => {
    setFirstName(e.target.value);
    setLastName(e.target.value);
    setPhonenumber(e.target.value);
    setBrand(e.target.value);
  }
  const handdleFirstName = (e) =>{
    setFirstName(e.target.value);
  } 
  const handdleLastName = (e) =>{
    setLastName(e.target.value);
  }
  const handdleBrand= (e) =>{
    setBrand(e.target.value);
  }
  const handdlePhonenumber=(e)=>{
    setPhonenumber(e.target.value);
  }
  
  const handdleSignUp =  async (e) => {
    e.preventDefault();
    console.log("signup")
    try{
       const curUser = await auth.createUserWithEmailAndPassword(Email,Password);
       var data = {
        Email: Email, 
        FirstName: FirstName,
        LastName: LastName,
        Phonenumber: Phonenumber,
        Brand: Brand,
        uid: curUser.user.uid,
        role: "1"
       }
       await db.collection('user').add(data);
       setIsSignUp(true)
    }catch(error){
      alert(error);
    }
  }
  if(isSignUp){
    return <Redirect to="/SignIn"/>
  }
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
              Admin SignUp
            </Typography>
            <TextField
              id="FirstName"
              label="First Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdleFirstName}
            />
            <TextField
              id="Last Name"
              label="Last Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdleLastName}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdleEmail}
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdlePassword}
            />
            <TextField
              id="Phonenumber"
              label="Phone number"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdlePhonenumber}
            />
            <TextField
              id="Brand"
              label="Brand"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "30px" }}
              onChange={handdleBrand}
            />

            <Button
              style={{
                backgroundColor: "#ff8989",
                color: "white",
                width: "100%",
                borderRadius: "30px",
                padding: "12px 0px",
              }}
              onClick={handdleSignUp}
            >
              Sign Up
            </Button>

            <Typography
              style={{
                color: "#C8C8C8",
                marginTop: "15px",
                marginLeft: "200px",
              }}
            >
              Already have an account?
              <a href="/SignIn">
                <span
                  style={{ color: "#FEDA7D", textDecorationLine: "underline" }}
                >
                  {" "}
                  Sign In
                </span>
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignUp;
