import React from "react";
import About from "./components/About";
import Intro from "./components/intro";
import Interest from "./components/Interest";
import Footer from "./components/Footer";


export default function App () {

    
    return(
        
        <div className="card-container">

       
        <Intro />
        <About />
        <Interest />
        <Footer />
        
        </div>

    )
}