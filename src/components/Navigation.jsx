import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Mike Kowols</a>
    </div>
    <ul class="nav navbar-nav">
       
      <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
			  <li
                className={`nav-item  ${
                  props.location.pathname === "/resume" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
                
			  <li
                className={`nav-item  ${
                  props.location.pathname === "/TeamSearch" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/TeamSearch">
                  Team Search
                </Link>
              </li>
			  
    </ul>
  </div>
</nav>
</div>
  );
}

export default withRouter(Navigation);