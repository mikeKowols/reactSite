import React from 'react'; 


const recipes = "http://localhost:3001/recipes";
const specials = "http://localhost:3001/specials";
 
class APICall extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 'e80ea521-4d42-48fe-a7a6-ac8952bc0de4'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	
  }
  
  componentDidMount() {
    fetch(recipes)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
	var dish = this.state.value;
	fetch(recipes)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
	
	fetch(recipes+"/"+dish)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dishes: result,
			ingredients: result.ingredients,
			directions: result.directions
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) 
	  
	fetch(specials)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            special: result,
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
    const {isLoaded, items, dishes, ingredients, directions, special} = this.state;
     
	if (items === undefined) {
      return <div className="container">No Results returned. Please consult the IT Department<br/><br/> </div>;
    } else if (!isLoaded) {
      return   <div className="container">
		<div className="row">
			<div className="col-md-12">
				 Waiting...
				 
			</div>
		  </div></div>;
    } else {

		for(let i = 0; i < items.length; i++){
			if(items[i] !== undefined){
				if(items[i].title === undefined){
					delete items[ i ];
				}
			}
		}
		
		if (special !== undefined && ingredients !== undefined) {
			for(let i = 0; i < ingredients.length; i++){
				if(ingredients[i] !== undefined){
					for(let j = 0; j < special.length; j++){
						if(special[j] !== undefined){
							if(special[j].ingredientId === ingredients[i].uuid){
								ingredients[i].special_title = special[j].title;
								ingredients[i].special_type  = special[j].type;
								ingredients[i].special_text  = special[j].text;
							}
						}
						
					}
				}
			}
		}
  
      return (
	  
        <div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1>Welcome to the Recipe Viewer!</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<form onSubmit={this.handleSubmit}>
        <label> 
          Select your recipe: 
		  <select style={{marginLeft: '10px'}} value={this.state.value} onChange={this.handleChange}>
				{items.map((item) =>
					 <option key={item.uuid} value={item.uuid}>{item.title}</option> 
				)}
		 		</select>
			   <input style={{marginLeft: '20px'}} type="submit" value="Submit"  />
        </label></form>
       		</div>
				{(() => {
					if (dishes === undefined) {
					  return (
						 <div>&nbsp;</div>
					  )
					 
					}else{
					  return (
						
						<div className="row">
							<div className="col-md-6">
								<img alt={dishes.title} src={"http://localhost:3001" + dishes.images.medium}/>
							</div>
							<div className="col-md-6">
								<h1>{dishes.title}</h1>
								<h3>{dishes.description}</h3>
								Servings: {dishes.servings}<br/>
								Prep Time: {dishes.prepTime} minutes<br/>
								Cook Time: {dishes.cookTime} minutes<br/><br/>
								Ingredients:<br/>
								<ul>
								
								{ingredients.map(ingredient => (
								
									<li key={ingredient.name}>
										{ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}
										{(() => {
											if (ingredient.special_title !== undefined) {
												return (
												<div><em>{ingredient.special_title}</em></div>
												)
											}
										})()}
										{(() => {
											if (ingredient.special_text !== undefined) {
												return (
												<div><em>{ingredient.special_text}</em></div>
												)
											}
										})()}
										{(() => {
											if (ingredient.text !== undefined) {
												return (
												<div><em>{ingredient.text}</em></div>
												)
											}
										})()}
									</li>
								))}
							 
								</ul>
								<br/> 
								 
								Directions:<br/>
								<ol>
								{directions.map(direction => (
								  <li key={direction.instructions}>
									  {direction.instructions + " "} 
										{(() => {
											if (direction.optional) {
												return (
												<em>(optional)</em>
												)
											}
										})()}
									</li>
								))}
								</ol>
							</div>
							
						</div>
					  )
					}
				})()}
				
				
				 
			</div>
		</div>  
		 
		
		
      );
    }
	
  }
}
 

 



export default APICall;