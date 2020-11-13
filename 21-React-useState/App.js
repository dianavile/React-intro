import React, {useState} from "react";

//Change class-based component into functional component, 
//using the useState() Hook.
function App() {
    //React.useState()
    const [answer] = useState("No");
    //console.log(answer);
    return (
        <div>
            <h1>Is state important to know? {answer} </h1>
        </div>
    )
}

//class-based Component
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App;

//Why this returns an ARRAY?
//Because we expect array destructering, when we get the value.
//ex of Object destructering:
// const
//     person = {
//     name: "Joe",
//     age: 42
//     }   
// const { name, age } = person;
//Difference Object or Array Destruction: 
// with Array Destruction:
//1) you can call it whatever you want.
//2) you can write less code, more efficiently.
//WHen using hooks, you do not have to use objects in a state, but just values.