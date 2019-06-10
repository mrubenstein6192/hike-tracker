import React, { Component } from 'react';
import { removePlannedHike, getPlannedHikes } from '../utils/API';


import Col from "../components/Col";
import Row from "../components/Row";

class Planned extends Component {
  state = {
    hikeListTwo: []
  };

  componentDidMount() {
    this.handleGetPlannedHikes();
  }

  handleGetPlannedHikes = () => {
    getPlannedHikes()
    .then(({ data: hikeListTwo}) => {
      this.setState({ hikeListTwo });
    })
    .catch(err => console.log(err));
  };

  handleRemoveHike = plannedId => {
    removePlannedHike(plannedId)
    .then(this.handleGetPlannedHikes)
    .catch(err => console.log(err));
  };

  render() {
    return(
      <React.Fragment>
         <div className = "jumbotron jumbotron-fluid text-center"
          style = {{
            backgroundImage: 'url(https://i.pinimg.com/originals/df/80/b9/df80b95c6e1ab48395882dfd6ccf08db.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px'
          }}><h1 
          style = {{
            color: "white",
            fontWeight: "bold"
          }}>To-Do List</h1>
          <a className="btn btn-lg btn-info text-center my-2" href="/planhike">Plan a Future Hike!</a>
        </div>
       <div className = "container-fluid my-3">
         <Row>
           {!this.state.hikeListTwo.length ? (
             <h2>No Hikes Planned Yet.</h2>
           ) : (
             this.state.hikeListTwo.map(planned => {
               return (
                 <Col key = {planned._id} md = {4}>
                   <div className = "card"
                   style = {{
                    boxShadow: "2px 6px 10px 2px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    borderRadius: "5px"
                   }}>
                  
                    <div className = "card-body bg-light text-dark"
                    style={{
                      fontSize: "x-large",
                    }}>
                      <p><strong>Name: </strong>{planned.name}</p>
                      <p><strong>Location: </strong>{planned.location}</p>
                      <a className = "btn btn-success text-center my-2" href = "/addhike" onClick={() => this.handleRemoveHike(planned._id)}>I Have Completed This Hike!</a>
                      <button className = "btn btn-danger" onClick={() => this.handleRemoveHike(planned._id)}>I Don't Want to do This Hike Anymore </button>
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
export default Planned;