import React from "react";
import DufcCrest from "./images/dufc-crest.png";
import ProfilePic from "./images/profile-pic.jpg";
import './styles/App.css';

function PicHeader() {
    return (
        <header>
            <img src={ProfilePic} alt="Profile Pic" className="profile-pic"/>
            <div className="title">Learning Flexbox</div>
            <img src={DufcCrest} alt="dufc crest" className="united-badge"/>
        </header>
    )
}
export default PicHeader;