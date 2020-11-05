import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

//Function App = Table of Contents of Components.
function App() {
    return (
        <div>
            <Navbar />
            <MainContent />
                <Footer />
        </div>
    ) 
};

export default App();