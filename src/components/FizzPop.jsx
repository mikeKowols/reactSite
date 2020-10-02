import React from "react";

const fontStyle1 = 
{
   color:'#000000',
   fontSize:'200px',
   fontWeight:'100',
   textAlign:'center' 
};
const fontStyle2 = 
{
   color:'#1A3665',
   fontSize:'200px',
   fontWeight:'700',
   textAlign:'center' 
};
const backStyle1 = 
{
	backgroundColor:'#EAEAEA',
	 
};
const backStyle2 = 
{
	backgroundColor:'#666666',
	 
};




class FizzPop extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = 
			{
				number: 0, 
				fontStyle: fontStyle2,
				backStyle: backStyle2
			};
		 
		this.updatePage  = this.updatePage.bind(this); 
		this.handleUp    = this.handleUp.bind(this);
		this.handleDown  = this.handleDown.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	
	
	updatePage(event)	
	{
		var counter = this.state.number;
		
		if(counter % 3 === 0)
		{
			this.setState({fontStyle: fontStyle2});
		}
		else
		{
			this.setState({fontStyle: fontStyle1});
		}
		
		if(counter % 5 === 0)
		{
			this.setState({backStyle: backStyle2});
		}
		else
		{
			this.setState({backStyle: backStyle1});
		}
	}



		
	handleReset(event) 
	{
		this.setState({number: 0, fontStyle: fontStyle2, backStyle: backStyle2});		
	}

	handleUp(event) 
	{
		var counter = this.state.number + 1;
		
		if(counter % 3 === 0)
		{
			this.setState({fontStyle: fontStyle2});
		}
		else
		{
			this.setState({fontStyle: fontStyle1});
		}
		if(counter % 5 === 0)
		{
			this.setState({backStyle: backStyle2});
		}
		else
		{
			this.setState({backStyle: backStyle1});
		}
		this.setState({number: counter});
	}
	
	handleDown(event) 
	{
		var counter = this.state.number;
		
		if(counter === 0)
		{ 
			alert("OOPS! You are at 0. You can't go lower");
		}else{
			counter = this.state.number -1; 
			if(counter % 3 === 0)
			{
				this.setState({fontStyle: fontStyle2});
			}
			else
			{
				this.setState({fontStyle: fontStyle1});
			}
			if(counter % 5 === 0)
			{
				this.setState({backStyle: backStyle2});
			}
			else
			{
				this.setState({backStyle: backStyle1});
			}
			this.setState({number: counter});
		}
	}
	
	
	
	
	
	render() {
      return (
		<div style={this.state.backStyle} className="container" >
			
			<div className="row">
				<div className="w-50 mx-auto">
					<h1 style={this.state.fontStyle}>{this.state.number}</h1>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-4 offset-md-4" style={{textAlign:'center'}} >
					<button type="button" 
							className="btn btn-info"
							onClick={this.handleDown}
							style={{marginRight:'20px'}}> - 
					</button>
					<button type="button" 
							className="btn btn-info"
							onClick={this.handleUp}
							style={{marginRight:'20px'}}> + 
					</button>
					<button type="button"
							className="btn btn-warning"
							onClick={this.handleReset}>RESET
					</button>
				</div>
			</div>
		</div>
	
	 );
	 
     
  }
}
 





export default FizzPop;