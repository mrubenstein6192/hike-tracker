import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import FutureHikes from "./pages/FutureHikes";
import MyHikes from "./pages/MyHikes";
import Navbar from "../src/components/Navbar";



function App() {
  return (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/home" component = {Home} />
        <Route exact path = "/futurehikes" component = {FutureHikes} />
        <Route exact path = "/myhikes" component = {MyHikes} />
        <Route render = {() => <h2>404 page!</h2>} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
