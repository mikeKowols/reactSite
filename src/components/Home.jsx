import React from "react";
import lagoon from './images/lagoon.jpg';

/*Starling Eyewear*/
import star_cat from './images/starling_category.png';
import star_home from './images/starling_home.png';  
import star_prod from './images/starling_product.png';
import star_cat_mobile from './images/starling_category_mobile.png';
import star_home_mobile from './images/starling_home_mobile.png';  
import star_prod_mobile from './images/starling_product_mobile.png';

/*Gold Eagle Sample Room*/
import SR_Login from './images/SR_Login.png';
import SR_AllProducts from './images/SR_AllProducts.png'; 
import SR_ProductDetailPage from './images/SR_ProductDetailPage.png';
import SR_Cart from './images/SR_AllProducts.png'; 
import SR_Checkout from './images/SR_Checkout.png';


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
              I have been seeing a lot of requests for developers who know how to use React. I got tired of saying that I don't have experience, so I'm taking this opportunity to learn. I'll probably  also talk about running and baseball a bit here. Below are screenshots of other projects I've done for work in the past. 
            </p>
          </div>
        </div>
		<div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h3>Gold Eagle - Sample Room</h3>
          </div>
        </div>
		
		<div className="row align-items-center my-5">
          <div className="col-lg-4">
             <img className="responsiveImage" src={SR_Login} alt={SR_Login} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={SR_AllProducts} alt={SR_AllProducts} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={SR_ProductDetailPage} alt={SR_ProductDetailPage} />
          </div>
        </div> 
       
	  <div className="row align-items-center my-5">
          <div className="col-lg-4">
             <img className="responsiveImage" src={SR_Cart} alt={SR_Cart} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={SR_Checkout} alt={SR_Checkout} />
          </div>
		  <div className="col-lg-4">
             &nbsp;
          </div>
        </div> 
		
		
		<div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h3>Starling Eyewear</h3>
          </div>
        </div>
       
	  <div className="row align-items-center my-5">
          <div className="col-lg-4">
             <img className="responsiveImage" src={star_home} alt={star_home} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={star_cat} alt={star_cat} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={star_prod} alt={star_prod} />
          </div>
        </div> 
       
	  <div className="row align-items-center my-5">
          <div className="col-lg-4">
             <img className="responsiveImage" src={star_home_mobile} alt={star_home_mobile} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={star_cat_mobile} alt={star_cat_mobile} />
          </div>
		  <div className="col-lg-4">
             <img className="responsiveImage" src={star_prod_mobile} alt={star_prod_mobile} />
          </div>
        </div> 
      </div>
	  
    </div>
  );
}



export default Home;