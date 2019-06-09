import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AddaHike from "./pages/AddHike";
import MyHikes from "./pages/MyHikes";
import Navbar from "../src/components/Navbar";
import PlanHike from './pages/PlanHike';
import Planned from './pages/PlannedHikes';


function App () {
  
  return (
  <Router>
    
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/home" component = {Home} />
        <Route exact path = "/addhike" component = {AddaHike} />
        <Route exact path = "/myhikes" component = {MyHikes} />
        <Route exact path = "/planhike" component = {PlanHike} />
        <Route exact path = "/plannedhikes" component = {Planned} />
        <Route render = {() => <h2>404 page!</h2>} />
      </Switch>

    
  </Router>
  );
}

export default App;