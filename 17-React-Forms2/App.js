import React, { Component } from "react";

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //grab current value
    //update state to reflect current value
    //this handleChange works for all
    handleChange(event) {
        const { name, value, type, checked } = event.target;//react syntatic event.
         type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //on eventlistener get value of specific element
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

                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                {/* textarea in react/jsx is selfclosing */}
                <textarea
                    value={"default value"}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                {/* No value property, but checked/no-checked (boolean) */}
                    <input
                        type="checkbox"
                        name="isFriendly" 
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                {/*  <input type="radio" /> */}
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                {/* Formik: library for REACT forms*/}
                <br />
                
                {/* <select> and <option> elements*/}
                  <label>Favorite Color:</label>
                    <select 
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
        
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favourite color is {this.state.favColor}</h2>
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
