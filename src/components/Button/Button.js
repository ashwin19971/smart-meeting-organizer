import React from 'react';

import './Button.scss';

const Button = ({ onClick, value, disabled }) => (
  <button
    onClick={onClick}
    className="common-button"
    disabled={disabled}
  >
    {value}
  </button>
);

export default Button;