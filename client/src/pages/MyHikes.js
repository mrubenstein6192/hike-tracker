import React, { Component } from 'react';
import { removeHike, getSavedHikes } from '../utils/API';

import Col from "../components/Col";
import Row from "../components/Row";

class Saved extends Component {
  state = {
    hikeList: []
  };

  componentDidMount() {
    this.handleGetSavedHikes();
  }

  handleGetSavedHikes = () => {
    getSavedHikes()
    .then(({ data: hikeList}) => {
      this.setState({ hikeList });
    })
    .catch(err => console.log(err));
  };

  handleRemoveHike = hikeId => {
    removeHike(hikeId)
    .then(this.handleGetSavedHikes)
    .catch(err => console.log(err));
  };

  render() {
    return(
      <React.Fragment>
       <div className = "container-fluid my-3">
         <Row>
           {!this.state.hikeList.length ? (
             <h2 className ="text-center">No Hikes Completed.  Get out there!</h2>
           ) : (
             this.state.hikeList.map(hike => {
               return (
                 <Col key = {hike._id} md = {4}>
                   <div className = "card">
                   <div className = "card-header text-center bg-success">Hike</div>
                    <div className = "card-body">
                      <p>{hike.name}</p>
                      <p>Location: {hike.location}</p>
                      <p>Date Completed: {hike.date}</p>
                      <p>Length: {hike.distance} miles</p>
                      <p>Time to Complete: {hike.time}</p>
                      <p>Difficulty: {hike.difficulty}</p>
                      <p>Dogs seen: {hike.dogs}</p>
                      <p>Overall Experience: {hike.experience}</p>
                      <button onClick={() => this.handleRemoveHike(hike._id)}
                      className = "btn btn-danger btn-sm">Remove Hike From List</button>
                   </div>
                   </div>
                 </Col>
               )
             })
           )}
         </Row>
         </div>
      </React.Fragment>
    )
  }
}

export default Saved;