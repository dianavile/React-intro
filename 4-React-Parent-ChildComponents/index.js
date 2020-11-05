//React = a Complex hierarchy of Components that leaks down to JSX elements.

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


//In React, to paint anything to the DOM, you need ReactDom.render()
ReactDOM.render(
    <App />, document.getElementById("root")
);


