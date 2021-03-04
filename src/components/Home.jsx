import React from "react";
import lagoon from './images/lagoon.jpg';


class Home extends React.Component {
  
	
  render() {
      return (
	  <div className="home">
	    <div className="container">
	      <div className="row align-items-center my-5">
		<div className="col-lg-7">
		  <img className="responsiveImage" src={lagoon} alt={lagoon} />
		</div>
		<div className="col-lg-5">
		  <p>
		    Hi. I’m Mike Kowols, front end web developer, husband, father, runner, and sports enthusiast. Over the course of training for 2 marathons, 6 half marathons and 16 Annual Edison Park Turkey Trots,
		    I’ve not only stretched myself physically, but expanded my web developing skill base. My proficiency in HTML, CSS, JavaScript and jQuery began with a Computer Programming degree
		    from Western Illinois University and continued to grow throughout the years with each company’s specific database. While partnering with a variety of industries I’ve worked with databases
		    such as Oracle, Microsoft SQL, Server, Ingres and MySQL.
		    <br/><br/>
		    5 years of ecommerce related projects enhanced my skills in platforms such as Magento, WooCommerce, Shopify, and X-Cart. While in those roles I also got the opportunity to expand more into full stack
		    develpment as I was responsible for setting up multiple WordPress sites begin to end. This included setting up linux boxes on AWS and Azure. I was also responsible for setting up Apache and MySQL.
		    I would then collaborate with design and marketing teams to ensure that the functionality as well as the look and feel matched the company vision for the site.  
		    <br/><br/>  
		    Most recently, I stretched my skills by updating this portfolio using React. I really enjoyed the processs of rebuilding the site and learning React, because it got me back to one of my favorite
		    aspects of what I do for a living. I love getting the opportunity to dig into to new technologies and learn new skills.  
		  </p>
		</div>
	      </div>
	    </div>
	  </div>
      );
	 
     
  }
}
 





export default Home;
