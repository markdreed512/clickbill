import React from "react";
import "./style.css";

function Title(props) {
  return (
  <nav className="navbar">
    <div className="title">{props.title}</div>
    <div className="subtitle">{props.subTitle}</div>
  </nav>
  )
  
}

export default Title;