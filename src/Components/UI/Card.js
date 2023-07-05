import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.title && <h2>{props.title}</h2>}
      {props.children}
    </div>
  );
};
export default Card;