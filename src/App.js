import './App.css';
import { Route, Switch } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddRingPage from './Components/AddRingPage';
import React from 'react';
import Profile from './Components/ProfilePage';
import DashboardPage from './Components/dashboardPage';
import StatisticsPage from './Components/StatisticsPage';


const App=()=>{

    return(
      <div>
      <div className ="App">
        <Sidebar/>
        <Switch>
          <Route path="/" component={DashboardPage} exact/>
          <Route path="/ring/add" component ={AddRingPage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/Statistics" component={StatisticsPage}/>
        </Switch>
      </div>
      </div>
    );

  
}

  

export default App;
