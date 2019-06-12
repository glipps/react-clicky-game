import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src=""/></span> Clicky Game!</li>
                <li>© 2019 Gabrielle Lipps</li>
                <li>< target="blank"><span><img className='logo' src=""/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;