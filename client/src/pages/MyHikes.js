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
        <div className = "jumbotron jumbotron-fluid text-center"
         style = {{
          backgroundImage: 'url(http://www.hikinghydration.com/wp-content/uploads/2015/09/Is-Hiking-or-Running-Better.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}><h1
        style = {{
          color: "white",
          fontWeight: "bold"
        }}>Completed Hikes</h1>
          <a className="btn btn-lg btn-info text-center my-2" href="/addhike">Add a Completed Hike!</a>
        </div>
       <div className = "container-fluid my-3">
         <Row>
           {!this.state.hikeList.length ? (
             <h2 className ="text-center">No Hikes Completed.  Get out there!</h2>
           ) : (
             this.state.hikeList.map(hike => {
               return (
                 <Col key = {hike._id} md = {3}>
                   <div className = "card"
                   style = {{
                    boxShadow: "2px 6px 10px 2px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    borderRadius: "5px"
                   }}>
                   <div className = "card-header text-center bg-dark text-light"><strong>{hike.name}</strong></div>
                    <div className = "card-body">
                      
                      <p><strong>Location: </strong> {hike.location}</p>
                      <p><strong>Date Completed: </strong>{hike.date}</p>
                      <p><strong>Length: </strong>{hike.distance} miles</p>
                      <p><strong>Time to Complete: </strong>{hike.time}</p>
                      <p><strong>Difficulty: </strong>{hike.difficulty}</p>
                      <p><strong>Dogs seen: </strong>{hike.dogs}</p>
                      <p><strong>Overall Experience: </strong>{hike.experience}</p>
                      <button onClick={() => this.handleRemoveHike(hike._id)}
                      className = "btn btn-danger btn-sm my-2">Remove Hike From List Entirely</button>
                      <a className = "btn btn-success btn-sm my-2" href = "/addhike" onClick={() => this.handleRemoveHike(hike._id)}>Update This Hike From Scratch</a>
                      
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