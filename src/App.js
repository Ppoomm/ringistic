import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddRingPage from "./Pages/AddRingPage";
import DashboardPage from "./Pages/dashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import WeddingPage from "./Pages/WeddingPage";
import EngagementPage from "./Pages/EngagementPage";
import DressPage from "./Pages/DressPage";
import DiamondPage from "./Pages/DiamondPage";
import StatisticsPage from "./Pages/StatisticsPage";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";
import auth from "./firebase";
import firebase from "firebase/compat";
import { AuthContext } from "./context/context";
import { Redirect } from "react-router-dom";
const App = () => {
  const db = firebase.firestore();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const resultUser = db.collection("user").where("uid", "==", user.uid);
        console.log(user.uid);
        // console.log((await resultUser.get()).docs[0].data());
        authContext.login();
        authContext.setUserInfo(user);
      }
    });
    return () => {
      handleAuth();
    };
  }, []);
  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              authContext.isAuth ? <DashboardPage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/ring/add"
            render={() =>
              authContext.isAuth ? <AddRingPage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/Statistics"
            render={() =>
              authContext.isAuth ? (
                <StatisticsPage />
              ) : (
                <Redirect to="/SignIn" />
              )
            }
          />
          <Route
            path="/profile"
            render={() =>
              authContext.isAuth ? <ProfilePage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/wedding/detail"
            render={() =>
              authContext.isAuth ? <WeddingPage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/engagement/detail"
            render={() =>
              authContext.isAuth ? (
                <EngagementPage />
              ) : (
                <Redirect to="/SignIn" />
              )
            }
          />
          <Route
            path="/dress/detail"
            render={() =>
              authContext.isAuth ? <DressPage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/diamond/detail"
            render={() =>
              authContext.isAuth ? <DiamondPage /> : <Redirect to="/SignIn" />
            }
          />
          <Route
            path="/SignIn"
            component={SignIn}
            render={() =>
              authContext.isAuth ? <Redirect to="/" /> :  <SignIn />
            }
          />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
