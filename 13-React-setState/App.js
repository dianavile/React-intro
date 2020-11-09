import React from "react";

class App extends React.Component {
    constructor() {
        super()
        //state is just an {object}
        //inicialize the state 
        this.state = {
            count: 0
        }
        //to bind the new method to .this
        this.handleClick = this.handleClick.bind(this);
    }
    
    //add own methods here, they need to be binded to class, inside of the constructor
    //handleClick is a method, defined on the App class.
    handleClick() { 
        //console.log("I'm working!");
        //never directly modify the version of State, use the method setState() instead.
        //1) pass a new version of state directly as object literal (if previous version of state doesn´t matter)
       // EX: this.setState({ count: 1 })
        //2) provide a function that returns an object literal to have access to a previous version of state
        //(if previous version of state is important and you need to change it)
         this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    // because handleClick() is using the setState()method, that comes from the parent Class,
    //React.Component can bind it, once done, we can use setState with 1) object literal (=new version of State), 
    //2) function that takes the previous state as a parameter and returns the object literal as a new version of State.

    render() {
        return (
            <div>
                {/* H1 displays the state */}
                <h1>{this.state.count}</h1>
                {/* add eventHandler to bottom, that runs a method handleClick() */}
                <button onClick={() => { this.handleClick }}>Change!</button>
                {/* anytime a child component changes, it will rerender the new version of props that is receiving */}
                {/* <ChildComponent count={this.state.count}/> */}
            </div>
        )
    }
}

export default App;

//you are allowed to add states to other components as props