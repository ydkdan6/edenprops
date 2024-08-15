import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, color, variant, size, onClick, className, disabled }) => {
  const baseStyles = `
    font-sans 
    font-medium 
    rounded 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    transition 
    ease-in-out 
    duration-150
  `;

  const colors = {
    primary: 'text-white bg-primary-orange hover:bg-orange-600 focus:ring-orange-500',
    secondary: 'text-white bg-primary-black hover:bg-gray-800 focus:ring-black',
    white: 'text-primary-black bg-white border border-primary-black hover:bg-gray-100 focus:ring-gray-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${colors[color]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  variant: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  variant: 'solid',
  size: 'md',
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
