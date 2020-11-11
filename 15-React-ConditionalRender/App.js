import React, { Component } from "react";
import Conditional from "./Conditional"; //import Conditional component

//class based Component with state, with property isLoading, true/false(boolean)
//isLoading used to make call to API, and during do another task.
//conditional rendering= to display on screen, while loading.
class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    //componentDidMount() method
    //to run code right after App Component mounts on the screen for 1st time
    componentDidMount() {
        //fake an API call with a setTimeout() method
        //by changing the state, so that loading is false.
        //once setTimeout()method is set to false, the Conditional Component receives a DIFFERENT PROP
        //it receives isLoading: true on 1st load, 
        //then when state changes, it receives isLoading: false and receives 
        //the same isLoading prop with a different VALUE. 
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    //so when the state changes, render()method will run again.
    //and because of a change,the conditional component will rerender.
    //render() method
    render() {
         return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App;


//The App Component is the one in charge 
//It can determine in its render()method what should be displayed or not.
