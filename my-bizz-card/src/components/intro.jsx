import React from "react";
import Logo from "../assets/tanish.jpg"
import { Button } from "@react-email/components";

export default function Intro (){
    return(
        <>
            <div>
                <img src={ Logo } className="Intro--Image" width={400} alt="Tanish" />
            </div>
            <div className="Top">
                
                <h1 className="Intro--Name">Tanish Hupare</h1>
                <h2 className="Intro--Title">SWE engineer</h2>
                <h3 className="Intro--Web">tanish.website</h3>

            </div>
        </>
            
    ) 
        
}
