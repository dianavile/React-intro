// MemeGenerator will be calling to an API and holding on to data
// make an API call to "https://api.imgflip.com/get_memes"  
// save the data that comes back(`response.data.memes`) to a new state property`allMemeImgs`.  
// (The data that comes back is an array)
// Initialize state to save the following data: top text, bottom text,
//random image(intialize with "http://i.imgflip.com/1bij.jpg")

import React, { Component } from "react";

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
// call lifeCycleMethod componentDidMount()
//when the component mounts, use fetch(), call API url.
//it returns a promise, we need to put in an JS Object, call JSON().
//get actual response, pull memes array from response.data

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    handleChange(event) { 
        // console.log("working")
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

        /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     *  meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    handleSubmit(event) {
        event.preventDefault();
        //get random int (index in Array)
        //get meme from index
        // set `randomImg` to the `.url` of the random item
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg });
    }
    
    render() {
        return (
            <div>
                  <form className="meme-form" onSubmit={this.handleSubmit}>
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                        
                    } 
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                 <div className="meme">
                    <img src="{this.state.randomImg}" alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;