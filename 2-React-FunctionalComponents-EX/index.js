// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from "react";
import ReactDOM from "react-dom";

//The functional component is inside of index.js
//But in React you can create a lot of individual components.
function MyInfo() {
    return (
        <div>
            <h1>Diana</h1>
        <p>This is a paragraph about me.</p>
        <ol>
            <li>Tokio</li>
            <li>New York</li>
            <li>Vancouver</li>
        </ol>
        </div>
    ) 
};

ReactDOM.render(
    //create an Instance of functional component
    <MyInfo />,
    document.getElementById("root")
);



