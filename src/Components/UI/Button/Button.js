import React from 'react';
import './Button.css';

const Button = (props) => {
  let buttonClasses = 'button';

  if (props.disabled) {
    buttonClasses += ' button-disabled';
  } else if (props.enableNormalRed) {
    buttonClasses += ' button-normal-red';
  }

  return (
    <button type={props.type} className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
