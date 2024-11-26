import React, { Component } from "react";
import "./Counter.css";

//define class component
class ClassCounter extends Component {
    //constructor method to initilize component state
    constructor(props) {
        super(props);//pass props to parent constructor or parent component
        this.state = {//initilize component state variable and set count fnc to update
            count: 0
        };
    }
    //method to increment count
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    //method to decrement count
    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
    }
    //method to reset count
    resetCount = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <div className="counter-container">
                <h1 className="counter-display">Class Component Counter: {this.state.count}</h1>
                <button className="counter-button" onClick={this.incrementCount}>Increment</button>
                <button  className="counter-button" onClick={this.decrementCount}>Decrement</button>
                <button  className="counter-button" onClick={this.resetCount}>Reset</button>
            </div>
        )
    }

}
export default ClassCounter;