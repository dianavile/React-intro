import React from "react";

//Nav= component
function Header() {
    return (
        //use className to access JS Dom under the hood with JSX.
         <header className="navbar">
                <h1>Hello</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </header>
    )
 }

export default Header();

//document.getElementById("something").className += " new-class-name"