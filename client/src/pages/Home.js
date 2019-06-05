import React from 'react';

function Home() {
  return (
    <React.Fragment>
      <div
        className = "jumbotron jumbotron-fluid text-center"
        style = {{
          backgroundImage: 'url(https://www.banfflakelouise.com/sites/default/files/styles/l_1600_12x6/public/hiking_sentinel_pass_jake_dyson_2_horizontal.jpg?itok=jsU6BajR)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px'
        }}>
          <h1 className = "display-3"
          style = {{
            fontWeight: 'bold',
            color: 'black',
          }}>Welcome to MyHikes!</h1>
        </div>

        <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
            <h2 className="display-4">Our Mission</h2>
            <p>For the inexperienced, the expert, or anyone in between, MyHikes is designed to help you make the most of your hiking memories!</p>
            <p>Keep track of all of your hikes as you complete them!</p>
            <p>Research hikes you would like to do in the future!</p>
            <p>Look back with pride on all of the great experiences you've had!</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;