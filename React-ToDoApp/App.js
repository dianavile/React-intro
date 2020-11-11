// Create the <App /> component from scratch
import React from "react";
// Change the input/p combo below to be a new component called <TodoItem />.    
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

//Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
//Function App = Table of Contents of Components.

 /*Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 * a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id */
class App extends React.Component {
    constructor() { 
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. 
    //(Think how you might use the`.map` method to do this)
      this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    // todo.completed = !todo.completed; //directly modifies the prevState, not recomendable
                    //instead; return a new object, flip the property of the new object.
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
          console.log(prevState.todos);
          console.log(updatedTodos);
           return {
                todos: updatedTodos
            }
        })
    }

    render(id) {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
        //wrap in div, because only can return 1 element at the time.
        <div className="todo-list">
             {todoItems}
        </div>
        ) 
    }
};

export default App;
