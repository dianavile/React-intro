import React, { useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    
    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    useEffect(() => {
       // setColor(randomcolor());//this leads to an infinite loop
    }, [count])
    //in the array specify which variable to watch for to only render.
    //, [])= change only on first mount with empty array.
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App;

//Reasons to use classComponent:
// 1) State
// 2) Lifecycle()methods
//The useEffect()HOOK is a replacement for 3 lifecycle()methods:
// 1- componentDidMount
// 2- componentDidUpdate
// 3- componentWillUnmount

//useEffect() is a hook that allows to use sideeffects in component
//Side effects? (things outside of the component):
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals
