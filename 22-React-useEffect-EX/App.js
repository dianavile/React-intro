import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    //we can call useEffect() more then once.
    //something specific to only run once, use empty array
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
         //cleanup
        return () => {clearInterval(intervalId);}
    }, []);
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count]);

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}

export default App;


//until now, logic with component,
//yet some sideEffect will not clean up automatically
// 1) create a manual eventListener() for a part of your document,
 //document.addEventListener(...)//does NOT clean up automatically
// 2) socket subscription= watches for changes in realtime (ex: realtime chat)
// Use setInterval() , native build-in JS function, componentWillUnmount, to clean up automatically.


//useEffect, introducing sideEffects into a component.
//1) replace componentDidMount- [] with empty array.
//2) replace componentDidUpdate- add variables to [] array.
//3) replace componentWillUnmount- return function for cleanup.