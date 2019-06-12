import React from "react";
import "./Header.css";
import GameMessage from "../GameMessage";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2>React Clicky Game</h2></li>
            <GameMessage score={props.score} topScore={props.topScore} />
            <li id="score">Current Score: {props.score} | Best Score: {props.topScore}</li>
        </ul>
        
    </div>
)

export default Header;

