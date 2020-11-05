import React from "react";
import ReactDOM from "react-dom";

//functional component- always use camelCase with React
//A Component needs to return a single JSX element.
//You can NOT return 2 different elements next to each other.
//You can get around this by wrapping 2+ JSXelments into a <div>.
function MyApp() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    ) 
};

ReactDOM.render(
    //create an Instance of functional component
    <MyApp />,
    document.getElementById("root")
);



