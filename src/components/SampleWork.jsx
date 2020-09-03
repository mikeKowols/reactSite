import React from "react";

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

/*FMS*/
import fms_contactUs from './images/fms_contactUs.png';
import fms_home from './images/fms_home.png';
import fms_hardware from './images/fms_hardware.png';  
import fms_knowledgeBase from './images/fms_knowledgeBase.png';
import fms_software from './images/fms_software.png';  
import fms_videos from './images/fms_videos.png';


/*Community Cafe*/
import cc_contactUs from './images/cc_contactUs.png';
import cc_home from './images/cc_home.png';
    

class SampleWork extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {value: 'th'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
   

  handleSubmit(event) {
     
    event.preventDefault();
	 
  }

		
	render(){
			
			
  var role = this.state.value;
  return (
  
    <div className="about">
      <div className="container">
		<h3>Sample Work</h3>
        <div className="row">
					<div className="col-md-12">
						<form onSubmit={this.handleSubmit}>
						<label> 
							Select site from list to see screenshots: 
						</label>	
							<select style={{marginLeft: '10px'}} value={this.state.value} onChange={this.handleChange}>
								<option value="cc">Community Cafe</option>
								<option value="th">Fuel Management Systems</option>
								<option value="ge">Sample Room</option>
								<option value="se">Starling Eyewear</option>
							</select>
							 
						</form> 
					</div>
				</div>
				 
				 
				{(() => {
					if (role === "cc") {
					  return (
						<CoopersHawk/>
					  )
					} else if (role ==="ge") {
					  return (
						<GoldEagle/>
					  )
					} else if (role === "se") {
					  return (
						<StarlingEyewear/>
					  )
							
					} else {
					  return (
						<Tuthill/>
					  )
					}
				})()}
				 		
			</div>
      </div>
     
  );
}}

class CoopersHawk extends React.Component {
	
	
	render() {
     
      return (
		<div id="cc" >
			<div className="row align-items-center my-5">
			  <div className="col-lg-12">
				<h3>Coopers Hawk - Community Cafe</h3>
			  </div>
			</div>
			
			<div className="row align-items-center my-5">
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={cc_home} alt={cc_home} />
			  </div>
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={cc_contactUs} alt={cc_contactUs} />
			  </div>
			  <div className="col-lg-4">
				  
			  </div>
			</div>
		</div>
         
		   
      );
	
	}
}

class GoldEagle extends React.Component {
	
	
	render() {
     
      return (
		<div id="ge">
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
		</div>
         
		   
      );
	
	}
}

class StarlingEyewear extends React.Component {
	
	
	render() {
     
      return (
		<div id="se">
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
         
		   
      );
	
	}
}


class Tuthill extends React.Component {
	
	
	render() {
     
      return (
		<div id="th">
			<div className="row align-items-center my-5">
			  <div className="col-lg-12">
				<h3>Tuthill - Fill-Rite: Fuel Management System</h3>
			  </div>
			</div>
			
			<div className="row align-items-center my-5">
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={fms_home} alt={fms_home} />
			  </div>
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={fms_hardware} alt={fms_hardware} />
			  </div>
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={fms_software} alt={fms_software} />
			  </div>
			</div> 
			<div className="row align-items-center my-5">
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={fms_knowledgeBase} alt={fms_knowledgeBase} />
			  </div>
			  <div className="col-lg-4">
				 <img className="responsiveImage" src={fms_videos} alt={fms_videos} />
			  </div>
			  <div className="col-lg-4">
				  <img className="responsiveImage" src={fms_contactUs} alt={fms_contactUs} />
			  </div>
			</div> 
		</div>
         
		   
      );
	
	}
}



export default SampleWork;