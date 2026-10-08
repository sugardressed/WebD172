import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Parent Component
class Parent extends React.Component {
  render() {
    return (
        <div>
            <h1>Parent Component</h1>
            <Child name="John" userId="123" />

        </div>
    );
  }
}

// Child Component
class Child extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Child Component</h2>
                <p>Name: {this.props.name}</p>
                <p>User ID: {this.props.userId}</p>
            </div>
        );
    }
}

ReactDOM.render(
    //Passing props from Parent to Child
    <Parent />,
    document.getElementById('root') 
)

serviceWorker.unregister();