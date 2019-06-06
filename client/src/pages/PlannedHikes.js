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
            backgroundImage: 'url()',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px'
          }}>
          <a className="btn btn-lg btn-info text-center" href="/planhike">Plan a Future Hike!</a>
        </div>
       <div className = "container-fluid my-3">
         <Row>
           {!this.state.hikeListTwo.length ? (
             <h2>No Hikes Planned Yet.</h2>
           ) : (
             this.state.hikeListTwo.map(planned => {
               return (
                 <Col key = {planned._id} md = {4}>
                   <div className = "card">
                   <div className = "card-header text-center bg-success">Hike</div>
                    <div className = "card-body">
                      <p>{planned.name}</p>
                      <p>Location: {planned.location}</p>
                      <button onClick={() => this.handleRemoveHike(planned._id)}
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

export default Planned;