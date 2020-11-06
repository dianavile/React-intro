// Create the <App /> component from scratch
import React from "react";
// Change the input/p combo below to be a new component called <TodoItem />.    
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

//Function App = Table of Contents of Components.
function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
        //wrap in div, because only can return 1 element at the time.
        <div className="todo-list">
             {todoItems}
        </div>
    ) 
};

export default App();
