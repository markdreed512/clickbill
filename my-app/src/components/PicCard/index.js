import React from "react";
import "./style.css";

class PicCard extends React.Component {
    state = {
        clicked: false
    }
    styles = {
        height: 130,
        padding: 5
    };
    handleClick() {
        if(this.state.clicked)
        {
            this.props.gameOver();
        } else {
            console.log("shuffle from pic")
            this.setState({
                clicked: true
            })
            this.props.shuffle();
        }
    }
    render() {
        let props = this.props;
        console.log(this.state)
       
        return (
            <img onClick={() => {this.handleClick()}}style={this.styles}alt={props.name} src={props.image} id={props.id} clicked={props.clicked} />      
        )
    }
}
export default PicCard;



// <input type="checkbox" value={data.id} defaultChecked={false} onClick={((e) => this.handleClick(e, data))}/>