import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// Parent Component 
class Parent extends React.Component{ 
	render(){ 
		return( 
				<div> 
					<h2>You are inside Parent Component</h2> 
					<Child name="Kris" userId = "2390890"/> 
				</div> 
			); 
	} 
} 

// Child Component 
class Child extends React.Component{ 
	render(){ 
		console.log(this.props); 
		return( 
				<div> 
					<h2>Hello, {this.props.name}</h2> 
					<h3>You are inside Child Component</h3> 
					<h3>Your user id is: {this.props.userId}</h3> 
				</div> 
			); 
	} 
} 

ReactDOM.render( 
	// passing props 
	<Parent />, 
	document.getElementById("root") 
); 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
