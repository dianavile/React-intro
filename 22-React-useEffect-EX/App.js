import React, {useState} from "react";

//How to change the state using Hooks
// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() { 
    const [count, setCount] = useState(0);
    //const [answer, setAnswer] = useState("Yes")
    function increment() { 
        setCount(prevCount => prevCount + 1)
    }
    function decrement() { 
        setCount(prevCount => prevCount - 1)
    }
    //console.log(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
        </div>
    )
}
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App;

//To save different parts of state that are not really connected,
//instead of mashing all together into an {object}, 
//create multiple versions of state.