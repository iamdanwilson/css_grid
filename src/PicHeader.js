import React from "react";
import RefugeFooterSmile from "./images/refuge-footer-smile.svg"
import TwitterHeaderLogo from "./images/twitter-logo.png"
import FacebookHeaderLogo from "./images/facebook-logo.png"
import InstagramHeaderLogo from "./images/instagram-logo.png"
import './styles/header.css';

function PicHeader() {
    return (
        <header>
            <img src={RefugeFooterSmile} alt="Refuge Navigation Smile" className="refuge-header-pic"/>
            <div className="header-item">Radio</div>
            <div className="header-item">News</div>
            <div className="header-item">Artists</div>
            <div className="header-item">Support</div>
            <div className="header-item">About</div>
            <div className="header-item">Newsletter</div>
            <img src={InstagramHeaderLogo} alt="Instagram Logo" className="navigation-pic"/>
            <img src={TwitterHeaderLogo} alt="Twitter Logo" className="twitter-pic"/>
            <img src={FacebookHeaderLogo} alt="Facebook Logo" className="navigation-pic"/>
        </header>
    )
}
export default PicHeader;