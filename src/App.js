import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddRingPage from './Components/AddRingPage';
import { Component } from 'react';
import Profile from './Components/ProfilePage';
import DashboardPage from './Components/dashboardPage';
import StatisticsPage from './Components/StatisticsPage';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className ="App">
        <Sidebar/>
        <Switch>
          <Route path="/" component={DashboardPage} exact/>
          <Route path="/ring/add" component ={AddRingPage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/Statistics" component={StatisticsPage}/>
        </Switch>
      </div>
      </BrowserRouter>
    );

  }
}

  

export default App;
