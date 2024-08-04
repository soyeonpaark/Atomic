import React from 'react';
import { bool, func, oneOf, string } from '../utils/PropTypes';

const Button = ({
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  isClicked = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className} ${isClicked ? 'clicked' : ''}`}></button>
  );
};

Button.propTypes = {
  onClick: func,
  type: oneOf(['button', 'submit', 'reset']),
  disabled: bool,
  className: string,
  isClicked: bool,
};

export default Button;
