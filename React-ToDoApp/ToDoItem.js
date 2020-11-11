 // Create the <App /> component from scratch
import React from "react";

// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it
/*Style up the page: use regular CSS (in the CSS file) or inline styles, or both!*/
/*Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.*/

//Function App = Table of Contents of Components.
function ToDoItem(props) {
    return (
        //wrap in div, because only can return 1 element at the time.
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    ) 
};

export default ToDoItem();

//apply class to element, you need to used className instead of class.
//you can apply styles both inline as well as in a apart stylesheet.


//turn an Array of data.
 
 
