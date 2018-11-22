var typed = new Typed('#typed-str', {
  strings: ['World', 'Everyone'],
  typeSpeed: 100,
    backSpeed: 30,
    startDelay: 1200,
    smartBackspace: true,
    showCursor: false,
    loop: false
});  

var typed = new Typed('#typed-strings', {
    strings: ['Oops, I mean <i>Jajwalya</i>.','Oops, I mean <i>Jajwalya</i>.', 'Well, you can call me Jaj.'],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 1200,
    smartBackspace: true,
    showCursor: false,
    loop: false
});

var typed = new Typed('#typed-strings-2', {
    strings: ['Content Creator.', 'Developer.', 'Digital Humanities enthusiast.', 'Computer Science Engineer.'],
    typeSpeed: 200,
    backSpeed: 30,
    backDelay: 500,
    smartBackspace: true,
    showCursor: true,
    loop: true
});

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<h2>{this.props.title}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

class Link extends React.Component {
	render() {
		return(
			<a href={this.props.href}>{this.props.text}</a>
		)
	}
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			teal1: '#009acd',
			teal2: '#00b2ee',
			teal3: '#00c5cd',
			teal4: '#00ced1',
      teal5: '#006666',
      teal6: '#66b2b2'
		}
	}
	render() {
		return(
			<div className="container">
      <a href="https://codepen.io/JajwalyaRK/pen/qMWWvd" class="card-block clearfix">
				<Card title="Sitar Stars Landing Page" bgc={this.state.teal1} content="FreeCodeCamp Responsive Web Design Project: Build a Product Landing Page with HTML CSS"/> </a>
				<a href="https://codepen.io/JajwalyaRK/pen/yxMqbE" class="card-block clearfix">
          <Card title="Google Search Home Page" bgc={this.state.teal2} content="The Odin Project Web Development 101 project: Build the Google.com homepage with HTML CSS"/></a>
				<a href="https://codepen.io/JajwalyaRK/pen/wEJKoq" class="card-block clearfix">
				<Card title="Android Logo" bgc={this.state.teal3} content="The Odin Project Web Development 101 project: Build the Android Logo with HTML CSS"/></a>
        <a href="https://codepen.io/JajwalyaRK/pen/dgPadY" class="card-block clearfix">
				<Card title="Rock Paper Scissors" bgc={this.state.teal4} content="The Odin Project Web Development 101 project: Build the Rock Paper Scissors Game with HTML CSS"/></a>
        <a href="https://codepen.io/JajwalyaRK/pen/xjwNLE" class="card-block clearfix">
        <Card title="Neil Gaiman Tribute Page" bgc={this.state.teal5} content="FreeCodeCamp Responsive Web Design Project: Build a Tribute Page with HTML CSS"/></a>
         <a href="https://codepen.io/JajwalyaRK/pen/jpRZPX" class="card-block clearfix">
        <Card title="The Office Downsizing Survey" bgc={this.state.teal6} content="FreeCodeCamp Responsive Web Design Project: Build a Survey Form with HTML CSS"/></a>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('project-tile')
)