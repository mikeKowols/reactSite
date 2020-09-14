import React from "react";
import men_0 from './images/0.png'; 
import men_1 from './images/1.png'; 
import men_2 from './images/2.png'; 
import men_3 from './images/3.png';
import men_4 from './images/4.png'; 
import men_5 from './images/5.png'; 
import men_6 from './images/6.png'; 
import men_7 from './images/7.png';
import comiskey from './images/comiskey.jpg';

var dice = Math.floor((Math.random() * 20) + 1);
		var image = men_0;
		var homeScore =0;
		var visitorScore =0;
		var topBottom ="Top";
		var inning =1;
		var outs =0;
		var outsRecorded =0;
		var homeTeamName ="HOME TEAM";
		var visitingTeamName ="VISTING TEAM";
		var action =" ";
		var baseRunners =0;
		var scenario =0;
		var scenarioText ="";
		var visitorColor ="";
		var baseRunnersText = "";
		var homeColor =""; 
		var gameOver = false;
		var opening = true;


const teamScore = {
    textAlign: "left",
    marginRight: "50px",
	paddingLeft: "10px"
}

const buttonRow = {
    marginTop: "20px",
	paddingLeft: "10px"
}	

	
function runsScored(innings, runs)
{
	//ONE RUN SCORES
	if(innings%2 === 0){
		homeScore = homeScore + runs;
	}else{
		visitorScore = visitorScore + runs;
	}
}
	
	
class TeamSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: men_0,
			dice: 0,
			homeScore: 0,
			visitorScore: 0,
			topBottom: "Top",
			inning: 1,
			outs: 0,
			outsRecorded: 0,
			homeTeamName: "HOME TEAM",
			visitingTeamName: "VISTING TEAM",
			action: " ",
			baseRunners: 0,
			scenario: 0,
			scenarioText: "",
			visitorColor: "",
			baseRunnersText: "",
			homeColor: "",
			gameOver: false,
			opening: true
		};
		this.onClickGame = this.onClickGame.bind(this);
		this.onClickOpening = this.onClickOpening.bind(this);
		this.onClickReset = this.onClickReset.bind(this);
	}

	onClickOpening(){ 
		
		alert("AAA");
		this.setState({ 
		
			opening: false
		
		});
		
		 
	
	
	}
	
	
	onClickGame(){ 
	
		 dice = Math.floor((Math.random() * 20) + 1);
		 image = this.state.image;
		 homeScore = this.state.homeScore;
		 visitorScore = this.state.visitorScore;
		 topBottom = this.state.topBottom;
		 inning = this.state.inning;
		 outs = this.state.outs;
		 outsRecorded = this.state.outsRecorded;
		 homeTeamName = this.state.homeTeamName;
		 visitingTeamName = this.state.visitingTeamName;
		 action = this.state.action;
		 baseRunners = this.state.baseRunners;
		 scenario = this.state.scenario;
		 scenarioText = this.state.scenarioText;
		 visitorColor = this.state.visitorColor;
		 baseRunnersText = this.state.baseRunnersText;
		 homeColor = this.state.homeColor; 	
			//console.log("You rolled a " + dice);
			
			//CHECK OUTS ON DICE ROLL AND SETS VARIABLES
			if(dice ===  1){
				//HOME RUN
				outsRecorded = 0;
				action = "HOME RUN!!";
				scenario = 4;
				
				
			}else if(dice === 21){
				//TRIPLE
				outsRecorded = 0;
				action = "TRIPLE!!";
				scenario = 3;
				
			}else if(dice === 2){
				//DOUBLE
				outsRecorded = 0;
				action = "DOUBLE!!";
				scenario = 2;
				
			}else if(dice === 4 || dice === 6 || dice === 12 || dice === 13 ||dice === 16 ){
				//SINGLE/WALK
				
					outsRecorded = 0;
					scenario = 1;
				
				if(dice === 4 || dice === 12 || dice ===16){
					
						action = "WALK";
					
				}else{
					
						action = "SINGLE";
					
				}
			}else if(dice === 10){
				//1B - 2 BASES
				
					outsRecorded = 0;
					action = "SINGLE (runners advance)";
					scenario = 6;
				
				
			}else if(dice === 20){
				//SAC FLY 1 OUT BUT ADVANCE 1 BASES	//SAC FLY (\
				outsRecorded = 1;
				if(outs === 2){
					
						action = "POP FLY";
					
				}else{
					
						action = "SAC FLY";
					
				}
				scenario = 7;
			}else if(dice === 7){
				//WILL EVENTUALL BE DOUBLE PLAY (FOR NOW GROUND OUT)
				
					outsRecorded = 1;
					action = "GROUND OUT";
					scenario = 5;
				
			}else if(dice === 3 || dice === 5 || dice === 8 || dice === 9 ||dice === 11 || 
					dice === 14 || dice === 15 || dice === 17 || dice === 18 || dice === 19){
				//OUT
				
					outsRecorded = 1;
					scenario = 5;
				
				if(dice === 19){
					
						action = "STRIKE OUT";
					
				}else if(dice === 3 || dice === 15 || dice === 11){
					
						action = "FLY OUT";
					
				}else if(dice === 5 || dice === 17 || dice === 18){
					
						action = "POP OUT";
					
				}else if(dice === 8 || dice === 9 || dice === 14){
					
						action = "GROUND OUT";
					
				}
			}
			
			outs +=outsRecorded;
			
			if(outs >=3)
			{
				inning    += 1;
				outs        = 0;
				baseRunners = 0;
			}else{
				//PLAY OUT ACTIONS USING VARIABLES CREATED ABOVE
				if(scenario === 1){  //SINGLE/WALK
					if(baseRunners === 0){
						baseRunners = 1;
					}else if(baseRunners === 1){
						baseRunners = 3;
					}else if(baseRunners === 2){
						baseRunners = 3;
					}else if(baseRunners === 3){
						baseRunners = 7;
					}else if(baseRunners === 4){
						baseRunners = 5;
					}else if(baseRunners === 5){
						baseRunners = 7;
					}else if(baseRunners === 6){
						baseRunners = 7;
					}else if(baseRunners === 7){
						baseRunners = 7;
						//ONE RUN SCORES
						if(inning%2 === 0){
							homeScore = homeScore + 1;
						}else{
							visitorScore = visitorScore + 1;
						}
					}
				}else if(scenario === 2){ //DOUBLE
					if(baseRunners === 0){
						baseRunners = 2;
					}else if(baseRunners === 1){
						baseRunners = 6;
					}else if(baseRunners === 2){
						baseRunners = 2;
						runsScored(inning, 1);
					}else if(baseRunners === 3){
						baseRunners = 6;
						runsScored(inning, 1);
					}else if(baseRunners === 4){
						baseRunners = 2;
						runsScored(inning, 1);
					}else if(baseRunners === 5){
						baseRunners = 6;
						runsScored(inning, 1);
					}else if(baseRunners === 6){
						baseRunners = 2;
						runsScored(inning, 2);
					}else if(baseRunners === 7){
						baseRunners = 6;
						runsScored(inning, 2);
					}				
				}else if(scenario === 3){ //TRIPLE`
					if(baseRunners === 1 || baseRunners === 2 || baseRunners === 4){
						runsScored(inning, 1);
					}else if(baseRunners === 3 || baseRunners === 5 || baseRunners === 6){ 
						runsScored(inning, 2);
					}else if(baseRunners === 7){
						runsScored(inning, 3);
					}
					baseRunners = 4; //Man on third
				}else if(scenario === 4){ //HOMERUN
					if(baseRunners === 0)
					{
						runsScored(inning, 1);
					}else if(baseRunners === 1 || baseRunners === 2 || baseRunners === 4 ){ //ONE ON
						runsScored(inning, 2);
					}else if(baseRunners === 3 || baseRunners === 5 || baseRunners === 6 ){ //ONE ON
						runsScored(inning, 3);
					}else{
						runsScored(inning, 4);
					}
					
					baseRunners = 0; //Bases empty
					
				}else if(scenario === 5){ //OUT
					//Outs recorded above. 
				}else if(scenario === 6){ //SINGLE + 2 bases
					if(baseRunners === 0){
						baseRunners = 1;
					}else if(baseRunners === 1){
						baseRunners = 5;
					}else if(baseRunners === 2){
						baseRunners = 1;
						runsScored(inning, 1);
					}else if(baseRunners === 3){
						baseRunners = 5;
						runsScored(inning, 1);
					}else if(baseRunners === 4){
						baseRunners = 1;
						runsScored(inning, 1);
					}else if(baseRunners === 5){
						baseRunners = 5;
						runsScored(inning, 1);
					}else if(baseRunners === 6){
						baseRunners = 1;
						runsScored(inning, 2);
					}else if(baseRunners === 7){
						baseRunners = 5;
						runsScored(inning, 2);
					}
				}else if(scenario === 7){ //SAC FLY ( OUT + 1 BASE)
					if(baseRunners === 1){
						baseRunners = 2;
					}else if(baseRunners === 2){
						baseRunners = 4;
					}else if(baseRunners === 3){
						baseRunners = 6;
					}else if(baseRunners === 4){
						baseRunners = 0;
						runsScored(inning, 1);
					}else if(baseRunners === 5){
						baseRunners = 2;
						runsScored(inning, 1);
					}else if(baseRunners === 6){
						baseRunners = 4;
						runsScored(inning, 1);
					}else if(baseRunners === 7){
						baseRunners = 6;
						runsScored(inning, 2);
					}
				}
			} 
			
			if(baseRunners === 0){
				
					baseRunnersText  = "Bases Empty";
					image = men_0;
				
			}else if(baseRunners === 1){
				 
					baseRunnersText  = "Runner on first";
					image = men_1;
				
			}else if(baseRunners === 2){
				 
					baseRunnersText  = "Runner on second";
					image = men_2;
				
			}else if(baseRunners === 3){
				 
					baseRunnersText  = "Runners on first and second"; 
					image = men_3;
				
			}else if(baseRunners === 4){
				 
					baseRunnersText  = "Runners on third"; 
					image = men_4;
				
			}else if(baseRunners === 5){
				 
					baseRunnersText  = "Runners on first and third";
					image = men_5;
				
			}else if(baseRunners === 6){
				 
					baseRunnersText  = "Runner on second and third";
					image = men_6;
				
			}else if(baseRunners === 7){
				 
					baseRunnersText  = "Bases Loaded";
					image = men_7;
				
			}
			
			
			topBottom = inning%2 === 0 ? "Bottom" : "Top";
			
			if((inning >= 18  && homeScore > visitorScore) || 
				(inning > 18 && outs === 0 && (homeScore !== visitorScore)))
			{
				gameOver = true;
				action = "GAME OVER!!";	
			}
			
			
			this.setState({ 
				image: image,
				dice: dice,
				homeScore: homeScore,
				visitorScore: visitorScore,
				topBottom: topBottom,
				inning: inning,
				outs: outs,
				outsRecorded: outsRecorded,
				homeTeamName: homeTeamName,
				visitingTeamName: visitingTeamName,
				action: action,
				baseRunners: baseRunners,
				baseRunnersText: baseRunnersText,
				scenario: scenario,
				scenarioText: scenarioText,
				visitorColor: visitorColor,
				homeColor: homeColor,
				gameOver: gameOver
			});
		 
			 
			 
 	
	}
	
	onClickReset(){
		
		this.setState({ 
			image: men_0,
			dice: 0,
			homeScore: 0,
			visitorScore: 0,
			topBottom: "Top",
			inning: 1,
			outs: 0,
			outsRecorded: 0,
			homeTeamName: "HOME TEAM",
			visitingTeamName: "VISTING TEAM",
			action: " ",
			baseRunners: 0,
			baseRunnersText: "",
			scenario: 0,
			scenarioText: "",
			visitorColor: "",
			homeColor: "",
			gameOver: false			
		});
		
		
	}
	
	
	render(){
		
		return (
			<div className="container" id="gameScreen">
				{!opening && 
					<div>
						<div className="row">
							<div className="col-sm-12"><h1>BASEBALL</h1></div>
						</div>
						<div className="row" >
							<img id="splashImage" alt="MAIN_IMAGE" src={comiskey}/> 
							<div className="col-sm-12" style={buttonRow}>
								<input type="button" value="Continue" id="splashButton"  className="btn btn-primary" onClick={this.onClickOpening} />
								 
							</div>
						</div>
					</div>
				}
				{opening && 
					<div>
		  		<div className="row heading" >
					<div id="inningText" style={teamScore}>
						Inning: {" " + this.state.topBottom + " " + Math.round( this.state.inning/2 )}
					</div>
					<div id="outText" style={teamScore}>
						Out: {this.state.outs}
					</div>
				</div>
				<div className="row heading">
					<div id="homeText" style={teamScore}>
						Home Team: {this.state.homeScore}
					</div>
					<div id="visitorText" style={teamScore}>
						Visiting Team: {this.state.visitorScore}
					</div>
				</div>
				<div className="row heading">
					<div className="col-xs-12 item"></div>
				</div>
				<div className="row heading">
					<div className="col-xs-12 item">{this.state.action}</div>
				</div>
				<div className="row heading">
					<div className="col-xs-12">
						<img alt="gameImage" style={{width:'95%'}}id="mainImage" src={this.state.image}/>
					</div>
					<div  className="col-sm-12">
						{this.state.baseRunnersText} 
					</div>
				</div>
				<div id="buttons" className="row heading" style={buttonRow}>
					<div className="col-xs-12">
						{!this.state.gameOver && <input type="button" value="Pitch" id="pitch"  className="btn btn-primary" 
						onClick={this.onClickGame} /> } 
					</div>
				</div>
				<div id="buttons" className="row heading" style={buttonRow}>
					<div  className="col-xs-12 item">
						<input id="restart" type="button" value="Start New Game"  className="btn btn-primary" onClick={this.onClickReset} />
					</div>
				</div>
				</div>
				}
				
				
			</div>
				
			 
 
		);
		
		
	}
	
	
}
 

 



export default TeamSearch;