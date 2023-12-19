import React from "react";
import InstaIcon from "../assets/Instagram-Icon.svg";
import GitHubIcon from "../assets/GitHub-Icon.svg";

export default function Footer (){
    return(
        <div className="Footer">


            <div className="Icon">
                <a href="https://www.instagram.com/tanishisolgy/" className="Insta--Button">
                <img src={InstaIcon} alt="Email" className="Insta--Icon" />
                </a>

                <a href="https://github.com/tankit03" className="Git--Button">
                <img src={GitHubIcon} alt="Email" className="Git--Icon" />
                </a>
            </div>
            
        </div>

    )
}