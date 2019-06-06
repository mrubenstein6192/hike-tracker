import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getPlannedHikeById, planHike } from '../utils/API';

class PlanHike extends Component {
  state = {
    name: '',
    location: '',
    hikeSaved: false
  };

  componentDidMount() {
    console.log(this.props);

    if (this.props.match.params.id) {
      const hikeId = this.props.match.params.id;

      getPlannedHikeById(hikeId)
      .then(({ data: hikeData }) => {
        this.setState({
          id: hikeData._id,
          name: hikeData.name,
          location: hikeData.location
        })
      })
      .catch(err => console.log(err));


    }
  }

  handlePlanHike = hikeInfo => {
    planHike(hikeInfo)
      .then(() => {
       
        this.setState({
          hikeSaved: true
        });
      })
      .catch(err => console.log(err));
  }

  // handleInputChange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

      this.handlePlanHike({
        name: this.state.name,
        location: this.state.location
      });
    }

    render() {

      if (this.state.hikeSaved) {
        return <Redirect to= "/plannedhikes" />
      }
      return (
        <React.Fragment>
          <div className = "jumbotron"
         style = {{
         backgroundColor: "lightblue",
         textAlign: "center",
         fontSize: "xx-large"
        }}>
          Add a Hike to do Soon!
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Hike Name</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    name="name"
                    placeholder="Trail, Mountain, etc."
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <textarea
                    onChange={this.handleInputChange}
                    value={this.state.location}
                    name="location"
                    placeholder="City, State, or Country?"
                    className="form-control"
                  >
                  </textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-success">Save Hike</button>
              </form>
            </div>
          </div>
        
        </div>
        </React.Fragment>
      )

    }

}

export default PlanHike;