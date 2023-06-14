import React from "react";
import logo from "./logo-white.png";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Routes,
  Route
} from "react-router-dom";
import Team from "./team.jsx";

function Navbar() {
  // <!-- Navbar -->
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="auto" height="40" />
        </div>
        <div className="navbar-buttons">
          <a className="navbar-button" href="#">
            Home
          </a>
          <a className="navbar-button" href="#">
            About
          </a>
          <a className="navbar-button" href="#">
            Speakers
          </a>
          <a className="navbar-button" href="#">
            Partners
          </a>
          <Link className="navbar-button" to="/team">
            Team
          </Link>
          <a className="navbar-button" href="#">
            Contact
          </a>
        </div>
        <Switch>
          <Route path="./team" Component="Team" />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
