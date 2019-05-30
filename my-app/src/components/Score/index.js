import React from "react";
import "./style.css";

function Score (props){
    return (
        <div>
            
            <span> High Score: {props.highScore} </span>
            <span id="score">Score: {props.score}</span>
        </div>
        )
}

export default Score;