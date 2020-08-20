import React from "react";
import lake from './images/lake.jpg'; 


function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="responsiveImage" src={lake} alt={lake} />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Contact</h1>
            <p>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;