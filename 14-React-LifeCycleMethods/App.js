import React, { Component } from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
// lifecyclemethods: 2 most often used: componentDidMount()and render()
//1 
    componentDidMount() {
     //GET the data I need to correctly display
    }

    //2 better not tu use anymore
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }

    //3- to change "clothes"
    shouldComponentUpdate(nextProps, nextState) {
   // to optimize app
    //return true if want it to update
    //return false if NO update 
    }

    //4- cleanup of component- to remove clutter
    componentWillUnmount() {
    //teardown or cleanup your code before your component disappears 
    //EX remove event listener  
    }

    //DEPRECATED (React v16.3 ongoing):
    // componentWillMount() {};
    // componentWillReceiveProps(nextProps){}; 
    // componentWillUpdate()

    //NEW LifecycleMethods
    //1
    static getDerivedStateFromProps(props, state) {
    // is a static method()   
    // return the new, updated state based upon the props 
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html 
      // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops    
    }

     //2 not often used, but handy to know. 
    getSnapshotBeforeUpdate() {
    //create a "backup" of the current way things are 
    //to save an object with multiple datapoints inside
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }

    componentDidMount() {
        console.log("Mounted")
    }
    //3 also important
    // https://scrimba.com/g/greacthooks
    //this method will update everytime the component renders
    //the rerenders happen when update the state.
    //you ONLY set state in certain conditions
    componentDidUpdate() {
        console.log("Did Update")
    }

    //EX 
    //componentDidUpdate(prevProps, prevState) {
    //     if(prevState.count !== this.state.count) {
    //         const newColor = randomcolor()
    //         this.setState({color: newColor})
    //     }
    // }

// ›Render
// ›Mounted
// ›Render
// ›Did Update

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App;


// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
