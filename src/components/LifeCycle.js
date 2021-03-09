import React from 'react'; 

export default class Test extends React.Component { 
	constructor(props) 
	{ 
		super(props); 
		this.state = { 
			hello : "World!" }; 
	} 
	  static getDerivedStateFromProps(){
		console.log("getDerivedStateFromProps()")
		return{}
	  }
	componentDidMount() 
	{ 
		console.log("componentDidMount()"); 
	} 

	changeState=()=> 
	{ 
		this.setState({ hello : "React!" }); 
		setTimeout(
			()=> {
				this.setState({ API: false });
				
			},
			3000
		);
	} 

	render() 
	{ 
		return ( 
			<div> 
			<h1>Hello {this.state.hello} </h1> 
			<h2> 
			<button onClick={this.changeState}>Press Here!</button> 
			</h2> 
			</div>); 
	} 

	shouldComponentUpdate(nextProps, nextState) 
	{ 
		console.log("shouldComponentUpdate()"); 
		return true; 
	} 


	componentDidUpdate() 
	{ 
		console.log("componentDidUpdate()"); 
	} 
} 

