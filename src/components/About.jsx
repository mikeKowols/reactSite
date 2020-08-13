import React from "react";
import wrigley from './wrigley.jpg';  

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="responsiveImage" src={wrigley} alt="{wrigley}" />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              I am an experienced web developer who is always trying to figure out how things work and learn new things. This is my first attempt at a multi-page site using react.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;