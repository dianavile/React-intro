import React from "react";

import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
    //higher order Array Methods with Arrow Function
    //a map returns a new Array of components.
     const jokeComponents = jokesData.map(joke => {
         return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        //  jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
    })
   
    return (
        <div>
            {jokeComponents};  
        </div>
    )
}

export default App;

//NOTE: REACT expects a key prop while mapping components.
//Whenever you use the map methods in React, you should add a new prop called key.
//add map methods.
//  //higher order Array Methods, methods that take a function as an Array and allow you to 
// //control what should happen in the elements of that Array.
// function App() { 
//     const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const doubled = nums.map(function(num) {
//         return num * 2;
//     })
//     console.log(doubled);
//     //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// }

//Much of React is just Vanilla Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter //only display certain elements of an Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort //put things in a certain order
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


