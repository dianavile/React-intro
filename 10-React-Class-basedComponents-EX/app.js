import React from "react";

//FunctionalComponent
// function App() {
//     return (
//         <div>
//             <h1>{Code goes here}</h1>
//         </div>
//     )
// }

//Class-based Component
//it needs at least 1 method render()
class App extends React.Component { 
    yourMethodHere() { 

    }
    render() {    
        const style = this.yourMethodHere();
        return (
            <div>
                <h1>{this.props.what}</h1>
            </div>
        )
    }
}
    
export default App;


//code that determines the display logic, goes right before the render()method
//display logic: what will be displayed on the screen?
//style objects, inline styling: which style of the elements will be applied?
//conditional rendering

//in Functional components, you can pass in props in Function.
//in class-based components, you need to use this.props instead.
