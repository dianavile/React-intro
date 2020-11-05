import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

//DOM (Document Object Modal) is a tree, HTML element is root of tree.
//App Component is root of the tree.
//Components vs JSX Elements
//Make this a Table of Contents of Components.
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