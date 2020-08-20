import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;
 
  background: transparent;
 
  transition: all 0.1s ease-in;
 
  &:hover {
    background: #1a202c;
    color: #ffffff;
  }
`;



class TeamSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Chicago Cubs'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  componentDidMount() {
    fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Chicago%20Cubs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.teams
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleSubmit(event) {
     
    event.preventDefault();
	var team = this.state.value;
	
	fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.teams
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
	
  }


	
  render() {
    const { error, isLoaded, items } = this.state;
	 
	
    if (items == null) {
      return <div className="container">No Results returned. Please try searching again.<br/><br/><form onSubmit={this.handleSubmit}>
        <label> 
          Pick your team to learn more: 
		  <input type="text" value={this.state.value} onChange={this.handleChange}/>
         
        </label>
        <input style={{marginLeft: '20px'}} type="submit" value="Submit"  />
		  
      </form> </div>;
    } else if (!isLoaded) {
      return   <div className="container">
		<div className="row">
			<div className="col-md-12">
				 Waiting...
				 
			</div>
		  </div></div>;
    } else {
      return (
	  
        <div className="container">
		  <div className="row">
			<div className="col-md-12">
				I know that one of the most important things these days is to be able to show ability to use an external API. This details on this page are being pulled in from the sportspagedb.com API. Feel free to take a moment to read about your favorite team.<br/><br/>
				 
			</div>
		  </div>
		  <div className="row">
			<div className="col-md-12">
				<form onSubmit={this.handleSubmit}>
        <label> 
          Pick your team to learn more: 
		  <input type="text" value={this.state.value} onChange={this.handleChange}/>
         
        </label>
        <input style={{marginLeft: '20px'}} type="submit" value="Submit"  />
		  
      </form> 
				 
			</div>
		  </div>
		  
          {items.map(item => (
		  <div key="INFORMATION">
            <div className="row">
				<div className="col-md-9">
				<h1 key={item.strTeam}>
					{item.strTeam} 
				</h1> 
				<p key={item.intFormedYear}>
					Founded: {item.intFormedYear} 
				</p> 
				<h3>{item.strStadium}</h3>
				<p>
					<img key={item.strStadiumThumb} className="responsiveImage" src={item.strStadiumThumb}></img>
				</p>
				<p key={item.strStadiumDescription}>{item.strStadiumDescription}</p>
				<h3>Team Information</h3>
				<p key={item.strDescriptionEN}>{item.strDescriptionEN}</p>
			 </div>
			</div>
			
			<div className="row">
				<div className="col-md-3"> 
					<img key={item.strTeamBadge} className="responsiveImage" src={item.strTeamBadge}></img>
				</div>
				<div className="col-md-3"> 
					<img key={item.strTeamJersey} className="responsiveImage" src={item.strTeamJersey}></img>
				</div>
				<div className="col-md-3"> 
						<img key={item.strTeamLogo} className="responsiveImage" src={item.strTeamLogo}></img>
				</div>
			</div>
			</div>
          ))}
        </div>
      );
    }
  }
}


export default TeamSearch;