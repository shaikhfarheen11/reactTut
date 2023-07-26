import React from 'react';
import './Button.css';

const Button = (props) => {
  const { type, onClick, disabled } = props;

  // Check if the button is disabled and add the 'invalid' class to style it with a light red color
  const buttonClassName = `button ${disabled ? 'invalid' : ''}`;

  return (
    <button type={type} className={buttonClassName} onClick={onClick} disabled={disabled}>
      {props.children}
    </button>
  );
};

export default Button;
