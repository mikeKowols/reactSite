import React from "react";
import wrigley from './images/wrigley.jpg';  

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
              I am a 36-year old web developer who currently resides in the Northwest Suburbs of Chicago. Over the years I've had the good fortune of working in a number of different industries and meet some incredible people. I've spent over 10 years as a Front End Web Developer. I'm proficient with html, css, javascript and jQuery. I've also worked with a number of different databases including: Microsoft SQL Server, Oracle, Ingres, and MySQL. Over the past 5 years I've worked on a number of ecommerce related projects using ecommerce platforms such as: Magento, WooCommerce, Shopify, and XCart. When I'm not working, I enjoy running. I've ran 2 marathons and 6 half marathons. I've also been running the Edison Park Turkey Trot for 16 years. I also enjoy watching sports and spending time with my family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;