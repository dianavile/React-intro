import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }
    // && the and operator is a way to conditionally render something
    //if condition is true, and render nothing if false.
    // true && false
    render() {
        return (
             <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App;

//The && Operator is not necesary, because mostly you can use the ternary Operator, when return results = null. 
//But, it can simplify things.