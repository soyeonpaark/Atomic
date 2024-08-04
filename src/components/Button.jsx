import React from 'react';
import { bool, func, oneOf, string } from '../utils/PropTypes';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${Button}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  type: oneOf(['button', 'submit', 'reset']),
  disabled: bool,
  className: string,
};

export default Button;
