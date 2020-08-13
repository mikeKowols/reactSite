import React from "react";
import lagoon from './images/lagoon.jpg'; 


function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="responsiveImage" src={lagoon} alt={lagoon} />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Contact</h1>
            <p>
              Mike Kowols<br/>
			  mikekowols@gmail.com<br/>
			  847-308-7356<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;