import React from "react";

//A state = data that a component maintains and can change its value.
//To add state in a component:
//1) the component needs to be CLASS - BASED!
//2) and you need to add the constructor()method.It initializes parts of this class.
//3) and add the super()method, this goes along with the constructor()method.
//4) add property to props.data = object, to access this state anywhere else.
//props (the other way to pass data, can NOT be changed, props are inmutable!)
//this.props.something = "some new value" = NOT OKE!
//more info about classes: // https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
    constructor() {
        super()
        //initial value, can always be changed
        //the state can be passed down to a child components through props.
        this.state = {
            answer: "Yes"
        };

     }
    render() {
        return (
            <div>
                <h1>Is state important to know? {props.data.answer}</h1>
                <ChildComponent answer={props.data.answer}/>
            </div>
        )
    }
}

export default App;