import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AddaHike from "./pages/AddHike";
import MyHikes from "./pages/MyHikes";
import Navbar from "../src/components/Navbar";
import PlanHike from './pages/PlanHike';
import Planned from './pages/PlannedHikes';
import UserContext from './utils/UserContext';
import { removeHike, getUserProfile, loginCheck } from './utils/API';
import {Redirect} from 'react-router-dom';



class App extends React.Component {
  state = {
    isLoggedIn: false,
    hikes: [],
    plannedHikes: [],
    id: "",
    firstName: "",
    email: "",
    setLogin: (userData) => {
      this.setState({
        id: userData._id,
        firstName: userData.firstName,
        email: userData.email,
        isLoggedIn: true,
        hikes: userData.hikes,
        plannedHikes: userData.plannedHikes
      });
    },
    handleDeleteHike: (hikeId) => {
      removeHike(hikeId)
        .then(getUserProfile)
        .then(({ data: {hikes} }) => {
          this.setState({hikes})
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHikes: () => {
      getUserProfile()
        .then(({data: {hikes}}) => {
          this.setState({hikes})
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPlannedHikes: () => {
      getUserProfile()
        .then(({data:{plannedHikes}}) => {
          this.setState({plannedHikes})
        })
    },
    setLogout: () => {
      this.setState({
        isLoggedIn: false,
      });
    },
    checkLogin: () => {
      loginCheck()
        .then(({data: userInfo}) => {
          console.log(userInfo);
          this.setState({
            isLoggedIn: userInfo.isLoggedIn,
            firstName: userInfo.firstName,
            email: userInfo.email,
            id: userInfo._id
          })
        })
        .catch(err => console.log(err));
    }
  };

 render() { 
   // if user is logged in (isLoggedIn is true), redirect to /home
   if (this.context.isLoggedIn) {
    return <Redirect to='/home' />
  };
  return (
  <Router>
    <UserContext.Provider value = {this.value}>
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

      </UserContext.Provider>
  </Router>

  );
}
}

export default App;