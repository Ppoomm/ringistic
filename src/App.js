import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddRingPage from "./Pages/AddRingPage";
import Profile from "./Pages/ProfilePage";
import DashboardPage from "./Pages/dashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import WeddingPage from "./Pages/WeddingPage";
import EngagementPage from "./Pages/EngagementPage";
import DressPage from "./Pages/DressPage";
import DiamondPage from "./Pages/DiamondPage";
import StatisticsPage from "./Pages/StatisticsPage";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";
const App = () => {

  return (
    <div className="App">
      {/* <Sidebar/> */}
      <div className="content">
        <Switch>
          <Route path="/" component={DashboardPage} exact />
          <Route path="/ring/add" component={AddRingPage} exact />
          <Route path="/Statistics" component={StatisticsPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/wedding/detail" component={WeddingPage} exact />
          <Route path="/engagement/detail" component={EngagementPage} exact />
          <Route path="/dress/detail" component={DressPage} exact />
          <Route path="/diamond/detail" component={DiamondPage} exact />
          <Route path="/SignIn" component={SignIn} exact />
          <Route path="/SignUp" component={SignUp} exact />
          {/* <Route path="/AddNewRing" component={AddNewRing} exact /> */}

        </Switch>
      </div>
    </div>
  );
};

export default App;
