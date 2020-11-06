// Create the <App /> component from scratch
import React from "react";
// Change the input/p combo below to be a new component called <TodoItem />.    
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

//Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
//Function App = Table of Contents of Components.

class App extends React.Component {
    constructor() { 
        super()
        this.state = {
            todos: todosData;
        }   
    }
    render() {
        const todoItems = this.state.todosData.map(item => <TodoItem key={item.id} item={item}/>)
        return (
        //wrap in div, because only can return 1 element at the time.
        <div className="todo-list">
             {todoItems}
        </div>
        ) 
    }
};

export default App();
