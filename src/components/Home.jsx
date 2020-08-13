import React from "react";
import lagoon from './lagoon.jpg';  


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="responsiveImage" src={lagoon} alt={lagoon} />
          </div>
          <div className="col-lg-5">
            
            <p>
              I have been seeing a lot of requests for developers who know how to use React. I got tired of saying that I don't have experience, so I'm taking this opportunity to learn. I'll probably  also talk about running and baseball a bit here. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;