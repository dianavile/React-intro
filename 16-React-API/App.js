import React, { Component } from "react";

//Fetch data from an external Starwars API
class App extends Component {
    constructor() {
        super()
        //you save data in a Component by state
        this.state = {
            loading: false,
            character: {}//empty object
        }
    }
    //a hook in React Component to allow to run code directly after code first Mounts to the DOM.
    //to get data from an API
    componentDidMount() {
        //console.log("Hi!")
        //to get required data
        //to change state, use setState()
        this.setState({ loading: true })
        //build-in JS tool: fetch()
        fetch("https://swapi.dev/api/people/1")
            //resolve the promise, json()method
            .then(response => response.json())
            //receive the data, save data in state ith setState()
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    
    //loading feature
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name;
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App;

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
