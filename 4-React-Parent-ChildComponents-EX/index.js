// V Set up the React app from scratch
// V Render an App component (defined in a separate file)
// V Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//In React, to paint anything to the DOM, you need ReactDom.render()
ReactDOM.render(
    <App />, document.getElementById("root")
);

