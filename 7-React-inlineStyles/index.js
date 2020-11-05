import React from "react";
import ReactDOM from "react-dom";

function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
    
    const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 24 //"24px"
  }   
    return (
      //to use inline style CSS in JSX, you need to add curly braces to the object with curly braces
        //<h1 style={{color: "#FF8C00"}}>Good {timeOfDay}!</h1>
          <h1 style={styles}>Good {timeOfDay}!</h1>
  )
    
}

ReactDOM.render(<App />, document.getElementById("root"));

//JS determines what CSS style it is going to be.
//Styles.objects can be accessed and created.

// import React from "react"
// import ReactDOM from "react-dom"

// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
//   const styles = {
//     fontSize: 30
//   }
  
//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = "#04756F"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//     styles.color = "#2E0927"
//   } else {
//     timeOfDay = "night"
//     styles.color = "#D90000"
//   }
  
//   return (
//     <h1 style={styles}>Good {timeOfDay}!</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById("root"))