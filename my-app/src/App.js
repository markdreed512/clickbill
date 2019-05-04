import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import PicCard from "./components/PicCard";
import Title from "./components/Title";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import pics from "./pics.json";

//how select pic.clicked? 
//how increment score?

class App extends React.Component {
  state = {
    pics: pics,
    score: 0,
    highScore: 0,
    done: false
  }
  replay = () => {
    /* change state back to done: false  */
    this.setState({ 
      done: false
    });
 }

  shuffle = () => {
    //Shuffle pics (Durstenfeld shuffle algorithm)
    for (var i = pics.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = pics[i];
      pics[i] = pics[j];
      pics[j] = temp;
    }
    // Renderpics array
    this.setState({ 
      score: this.state.score + 1,
      pics });
  };

  gameOver = () => {
    console.log("game over!");
    this.setState({
      done: true
    })
    this.setState({
      score: 0
    })
    //if score > highScore, save highScore and replace previous highScore
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      })
    } 
      
  }

  renderCards() {
    const cards = this.state.pics.map(pic => (
      <PicCard
        key={pic.id}
        id={pic.id}
        name={pic.name}
        image={pic.image}
        shuffle={this.shuffle}
        gameOver={this.gameOver}
      />
    ))
      console.log(cards);
    return cards;
  }
  //render runs any time state changes
  render() {
    return (
      <Wrapper>
        <div className="container">
        <Title
        title = "Click-a-Bill"
        subTitle = "Be nice--don't click twice!!"
        />
        <Score
        score = {this.state.score}
        highScore = {this.state.highScore}
        />
        </div>
          <div className="cardContainer">
          {!this.state.done ? this.renderCards() : <GameOver replay= {this.replay}/>}
          </div> 
          
      </Wrapper>
    )



  }
}

export default App;

