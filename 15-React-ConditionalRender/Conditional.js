import React from "react";

//functional component
//the function will run again and
//all stated in return can potentially change,
//because props are going to be changed.

//conditiona rendering:  if-else statement
//load on screen if condition is true.
//do nothing if condition is false.

// function Conditional(props) {
//     if(props.isLoading === true) {
//         return (
//             <h1>Loading...</h1>
//         )
//     } else {
//         return (
//             <h1>Not loading</h1>
//         )
//     }
    
//alternative
// condition ? statement if true : statement if false
// function Conditional(props) {
//     return (
//         <div>
//             {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
//         </div>
//     )  
// }

// }


function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional;

//This function should only know what to do, when it displayed
