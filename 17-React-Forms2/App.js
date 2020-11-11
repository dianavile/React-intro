import React, { Component } from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //grab current value
    //update state to reflect current value
    handleChange(event) {
        const { name, value } = event.target;//react syntatic event.
        this.setState({
            //on eventlistener get value of specific element
            [name]: value
        })
    }
    
    render() {
        return (
            <form>
                {/* //we call a function on Change */}
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>

        )
    }
}

export default App;

//In React, Forms are constantly updated via State, from the beginning.
//We want to watch every single update on the form.
//whereas in Vanilla JS, it is updated and validated at the end.

//controlled form
//what displayed in form, need to match with state.
//State should be the single source of truth!
