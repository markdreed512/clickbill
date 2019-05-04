import React from "react";
import "./style.css";

class GameOver extends React.Component {
    render(){
        console.log("This: ", this)
        return (
            <div>
            <h1 className="gameOver">Game Over</h1>
            <button onClick={() => this.props.replay()}>Play Again</button>
            </div>
        )
    }
}


export default GameOver