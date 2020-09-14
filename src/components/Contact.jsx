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
            <h1>Contact</h1>
            <p>
				Mike Kowols<br/>
				<a href="mailto:mikekowols@gmail.com?subject=">mikekowols@gmail.com</a><br/>
				(847) 308-7356<br/>
				<a target="blank" href="https://www.linkedin.com/in/mike-kowols-b604305/">LinkedIn</a><br/>
				<a target="blank" href="https://github.com/mikeKowols/">GitHub</a><br/>
				
			</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;