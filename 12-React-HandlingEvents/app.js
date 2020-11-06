import React from "react";

//HandlingEvents in React
//Eventhandlers are camelCase.
function handleClick() { 
    console.log("I was clicked!");
}
function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")}
                src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App;

//React doc: supported events in React
//https://reactjs.org/docs/events.html#supported-events