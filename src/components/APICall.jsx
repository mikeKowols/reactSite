import React from 'react';
import ReactDOM from 'react-dom';
 

class APICall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
		  <div className="row">
			<div className="col-md-12">
				The data below is pulled in from thesportsdb.com API. Eventually I would like to have a search box but for now I have a hard coded search value. 
			</div>
		  </div>
          {items.map(item => (
		  <div>
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

export default APICall;

