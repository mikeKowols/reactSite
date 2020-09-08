import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">Mike Kowols</a>
    </div>
    <ul className="nav navbar-nav">
       
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
                  props.location.pathname === "/resume" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
			  <li
                className={`nav-item  ${
                  props.location.pathname === "/SampleWork" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/SampleWork">
                  Sample Work
                </Link>
              </li>
                
			  <li
                className={`nav-item  ${
                  props.location.pathname === "/TeamSearch" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/TeamSearch">
                  Sample API Call
                </Link>
              </li>
			  
    </ul>
  </div>
</nav>
</div>
  );
}

export default withRouter(Navigation);