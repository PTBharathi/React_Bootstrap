import React from "react";
import { SlSocialInstagram,SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { BiLogoFacebookCircle } from "react-icons/bi";

const TeamCard=({src,title,desc})=>{

    return(
        <div className="col-3 teamcards">
            <div className="TeamImage">
                <img className="TeamCardImage" src={src}/></div>
            <div>
                <h1 className="Teamicons">
                    <a href=""><SlSocialInstagram/></a>
                    <a href=""><SlSocialLinkedin/></a>
                    <a href=""><SlSocialTwitter/></a>
                    <a href=""><BiLogoFacebookCircle/></a>
                    </h1>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default TeamCard;