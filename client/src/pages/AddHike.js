import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getHikeById, createHike } from '../utils/API';


class AddaHike extends Component {
 
  state = {
    name: '',
    location: '',
    date: '',
    id: '',
    distance: '',
    time: '',
    difficulty: '',
    dogs: '',
    experience: '',

    hikeSaved: false
  };

  componentDidMount() {
    // for class components use THIS.PROPS to get props 
    console.log(this.props);

    if (this.props.match.params.id) {
      // extract id of hike out of this.props.match.params.id
      const hikeId = this.props.match.params.id;

      getHikeById(hikeId)
        .then(({ data: hikeData }) => {
          this.setState({
            id: hikeData._id,
            name: hikeData.name,
            location: hikeData.location,
            date: hikeData.date,
            distance: hikeData.distance,
            time: hikeData.time,
            difficulty: hikeData.difficulty,
            dogs: hikeData.dogs,
            experience: hikeData.experience
          });
        })
        .catch(err => console.log(err));
    }

  }

  // method for creating/POSTing a hike
  handleCreateHike = hikeInfo => {
    createHike(hikeInfo)
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

  
      this.handleCreateHike({
        name: this.state.name,
        location: this.state.location,
        date: this.state.date,
        distance: this.state.distance,
        time: this.state.time,
        difficulty: this.state.difficulty,
        dogs: this.state.dogs,
        experience: this.state.experience
      });
    }
  

  render() {
    // if hike has been saved, let's redirect to the myhikes page
    if (this.state.hikeSaved) {
      return <Redirect to="/myhikes" />
    }

    return (
      <React.Fragment>
        <div className = "jumbotron"
         style = {{
          backgroundImage: 'url(http://www.4usky.com/data/out/43/164374662-hiking-wallpapers.jpg)',
          backgroundPositionY: "30%",
          backgroundSize: 'cover',
         color: "black",
         textAlign: "center",
         fontSize: "50px",
         fontWeight: "bold",
         height: '300px'
        }}>
          Add a Completed Hike!
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8"
            style = {{
              fontSize: "large",
              color: 'black'
            }}>
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
                <div className = "form-group">
                  <label htmlFor = "date">Date</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.date}
                    name="date"
                    placeholder="(MM/DD/YYYY)"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="distance">Distance</label>
                  <input 
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.distance}
                    name="distance"
                    placeholder="in miles"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time to Complete</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.time}
                    name="time"
                    placeholder="Approximate"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="difficulty">Difficulty</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.difficulty}
                    name="difficulty"
                    placeholder="Mild, Moderate, Difficult or scale 1-10?"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dogs">Dogs</label>
                  <input 
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.dogs}
                    name="dogs"
                    placeholder="Approximate or No Dogs Allowed?"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Experience</label>
                  <textarea 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.experience}
                    name="experience"
                    placeholder="Be Descriptive!"
                    className="form-control"
                  />
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

export default AddaHike;