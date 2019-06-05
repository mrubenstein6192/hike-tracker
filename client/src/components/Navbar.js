import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        MyHikes
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/FutureHikes">
              Add a Hike
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/MyHikes">
              Completed Hikes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
