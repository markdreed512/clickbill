import React from "react";
import "./style.css";

function Title(props) {
  return (
  <nav className="nav navbar-light navbar-expand-lg bg-light">
    <div className="title">{props.title}</div>
    <div className="subtitle">{props.subTitle}</div>
  </nav>
  )
  
}

export default Title;