import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

//Function App = Table of Contents of Components.
function App() {
    return (
        <div>
            <Header />
            <MainContent />
                <Footer />
        </div>
    ) 
};

export default App();


//Name
// import React from "react"
// import ReactDOM from "react-dom"

// function App() {
//   const firstName = "Diana"
//   const lastName = "Vilé"
  
//   return (
//     <h1>Hello {`${firstName} ${lastName}`}!</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById("root"))


//New Date
// import React from "react"
// import ReactDOM from "react-dom"

// function App() {
//   const date = new Date()
  
//   return (
//     <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById("root"))

//New Time of the Day
// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }
  
//   return (
//     <h1>Good {timeOfDay}!</h1>
//   )
// }

// ReactDOM.render(<App />, document.getElementById("root"))