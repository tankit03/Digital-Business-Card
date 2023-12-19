import React from 'react';

import EmailIcon from "../assets/Button.svg";
import LinkedInIcon from "../assets/Button2.svg";

export default function Button (){
    return(
        <div className='Contact--Button'>
            <a href="mailto:huparetanish@gmail.com" className="Email--Button">
            <img src={EmailIcon} alt="Email" className="Email--Icon" />
            </a>
            <a href="https://www.linkedin.com/in/tanish-hupare/" className="Email--Button">
            <img src={LinkedInIcon} alt="LinkedIn" className="Email--Icon" />
            </a>
        </div>
    )

}