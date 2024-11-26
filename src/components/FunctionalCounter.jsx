import React, { useState } from "react";
import "./Counter.css";

//define fncl component

function FunctionalCounter(){
    //intialize count state variable and set count fnc to update
    const[count, setCount] = useState(0);
    //update increment or decrement
    //fnc increment count
    const incrementCount = () => {
        setCount(count + 1);
    }
    //fnc decrement count
    const decrementCount = () => {
        setCount(count - 1);
    }
    //fnc reset count
    const resetCount = () => {
        setCount(0);
    }
    return(
        <div className="counter-container">
            <h1>Functional Component Counter: {count}</h1>
            <button className="counter-button" onClick={incrementCount}>Increment</button>
            <button  className="counter-button" onClick={decrementCount}>Decrement</button>
            <button  className="counter-button" onClick={resetCount}>Reset</button>
        </div>
    )


}
export default FunctionalCounter;