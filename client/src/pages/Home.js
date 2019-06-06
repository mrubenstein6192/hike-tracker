import React from 'react';
import Research from '../components/Research';


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
           <a class="btn-lg btn-danger my-3 text-center" href="/auth/google">Sign in with Google</a>
        </div>

        <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2 className="display-4">Our Mission</h2>
            <p>Designed for all levels of hikers!</p>
            <p>Research hikes you would like to do in the future!</p>
            <p>Keep track of all of your hikes as you complete them!</p>
            <p>Look back with pride on all of the great experiences you've had!</p>
          </div>
          
        <div className = "col-12 col-md-4">
          <div className = "card">
            <div className = "card-header bg-light text-center">Find Your Next Hikes</div>
            <div className = "card-body">
              <Research />
            </div>
          </div>
        </div>
        </div>
        </div>
    
    </React.Fragment>
  );
}
export default Home;