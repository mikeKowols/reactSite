import React from 'react'; 


const teamLookup = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=";
const eventsNext = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=";
const eventsLast = "https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=";
const teamList = [
  {id: 134938, name: 'Chicago Bears'},
  {id: 134854, name: 'Chicago Blackhawks'},
  {id: 134870, name: 'Chicago Bulls'},
  {id: 135269, name: 'Chicago Cubs'},
  {id: 135253, name: 'Chicago White Sox'} 
];

 
class TeamSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '135269'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	
  }
  
  componentDidMount() {
	var team = this.state.value;  
	  
    fetch(teamLookup+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.teams
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
	  
	fetch(eventsNext+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            futGames: result.events
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 

	fetch(eventsLast+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            prevGames: result.results
          });
        },
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
	
	fetch(teamLookup+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.teams
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
	  
	  fetch(eventsNext+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            futGames: result.events
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
	  
	  fetch(eventsLast+team)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            prevGames: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
	  
	
  }


	
  render() {
    const {isLoaded, items, futGames, prevGames } = this.state;
	
    if (items == null) {
      return <div className="container">No Results returned. Please try searching again.<br/><br/><form onSubmit={this.handleSubmit}>
        <label> 
          Pick your team to learn more: 
		  <select style={{marginLeft: '10px'}} value={this.state.value} onChange={this.handleChange}>
			 
			{teamList.map((team) =>
				<option key={team.id} value={team.id}>{team.name}</option>
			)}
			
		</select>
         
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
		  <select style={{marginLeft: '10px'}} value={this.state.value} onChange={this.handleChange}>
			 
			{teamList.map((team) =>
				<option key={team.id} value={team.id}>{team.name}</option>
			)}
		</select>
         
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
				<h3>{item.strStadium}</h3>
				<p>
					<img alt={item.strStadiumThumb} key={item.strStadiumThumb} className="responsiveImage" src={item.strStadiumThumb}></img>
				</p>
				<p key={item.strStadiumDescription}>{item.strStadiumDescription}</p>
				<h3>Team Information</h3>
				<p key={item.strDescriptionEN}>{item.strDescriptionEN}</p>
			 </div>
			</div>
			 
			</div>
          ))}
		  
		  {(() => {
					if (futGames == null) {
					  return (
						 <div>&nbsp;</div>
					  )
					 
					}else{
					  return (
						 <div> 
							<h1>
								SCHEDULE (next 5)
							</h1>
							<div className="row">
								<div className="col-md-2">
									<b>Date</b>
								</div>
								<div className="col-md-2">
									<b>Time</b>
								</div>
								<div className="col-md-2">
									<b>Home Team</b>
								</div>
								<div className="col-md-2">
									<b>Away Team</b>
								</div>
							</div>
							{futGames.map(futGame => (
								<div key={futGame.dateEventLocal}>
									<div className="row">
										<div className="col-md-2">
											{futGame.dateEventLocal}
										</div>
										<div className="col-md-2">
											{futGame.strTimeLocal}
										</div>
										<div className="col-md-2">
											{futGame.strHomeTeam}
										</div>
										<div className="col-md-2">
											{futGame.strAwayTeam}
										</div>
										 
									</div>
								</div>
							))}
						</div>
					  )		
					}
				})()}
				
				{(() => {
					if (prevGames == null) {
					  return (
						 <div>&nbsp;</div>
					  )
					 
					}else{
					  return (
						 <div style={{marginTop:'20px'}}> 
							<h1>RESULTS (last 5)
							</h1>
							<div className="row">
								<div className="col-md-2">
									<b>Date</b>
								</div>
								<div className="col-md-3">
									<b>Home Team</b>
								</div>
								<div className="col-md-3">
									<b>Away Team</b>
								</div>
							</div>
							{prevGames.map(prevGame => (
								<div key={prevGame.dateEventLocal}>
									<div className="row">
										<div className="col-md-2">
											{prevGame.dateEventLocal}
										</div>
										<div className="col-md-3">
											{prevGame.strHomeTeam} (  {prevGame.intHomeScore} )
										</div>
										<div className="col-md-3">
											{prevGame.strAwayTeam} ( {prevGame.intAwayScore} )
										</div>
										 
									</div>
								</div>
							))}
						</div>
					  )		
					}
				})()}
		  
		  
		 
	 
		  
        </div>
      );
    }
  }
}
 

 



export default TeamSearch;