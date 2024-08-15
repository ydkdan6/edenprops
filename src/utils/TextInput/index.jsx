import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, color, size, weight, align, className }) => {
  const baseStyles = `${color} ${size} ${weight} ${align} ${className}`;

  return (
    <p className={baseStyles}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  color: 'text-primary-black',
  size: 'text-base',
  weight: 'font-normal',
  align: 'text-left',
  className: '',
};

export default Text;
