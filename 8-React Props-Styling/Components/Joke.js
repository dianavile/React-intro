import React from "react";

//"question" prop and a "punchLine" prop
function Joke(props) {
    // console.log(props.question);//null, because props are empty. It will not be displayed.
    return (
        <div>
            //pass down a prop, with an object, with a property
            //ternary operator- usefull in React
            {/* Alternative solution: <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3> */}
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3> 
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke;