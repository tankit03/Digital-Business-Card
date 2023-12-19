import React from "react";
import About from "./components/About";
import Intro from "./components/intro";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function App () {

    
    return(
        
        <div className="card-container">

       
        <Intro />
        <Button />
        <About />
        <Interest />
        <Footer />

        
        </div>

    )
}