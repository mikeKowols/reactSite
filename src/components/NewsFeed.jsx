import React from 'react'; 

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a185be9c73a7464bacd3c0a4bcf4cf7d")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
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
		   
			<h1>New Feed</h1>
			 
          {items.map(item => (
		  <div key="INFORMATION">
            <div className="row">
				<div className="col-md-9">
				  
				<h3 key={item.title}>
					<a href={item.url}>{item.title}</a>
				</h3>
				<p key={item.description}>
					{item.description}
				</p>
				<p>
					<img alt={item.urlToImage} key={item.urlToImage} className="responsiveImage" src={item.urlToImage}></img>
				</p>
				 <br/><br/>
				 
			 </div>
			</div>
			 
			</div>
          ))}
        </div>
      );
    }
  }
}

export default NewsFeed;



