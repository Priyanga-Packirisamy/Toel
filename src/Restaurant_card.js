import { ReactDOM } from "react";
import React from 'react';
import './Restaurant_card.css';

function Restaurant_card(props) {
  return (
    <div className="rcard">
        <img src={props.img}  height="200px" width="200px" className="rcard-img"/>
        <h4 className="rcard-name">{props.namee} {props.rating} ({props.ratingcount})</h4>
    </div>
  )
}

export default Restaurant_card
