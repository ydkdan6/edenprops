import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/';

const Loader = ({ size, className }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logo}
        alt="Loading..."
        className={`animate-spin ${sizeClasses[size]} ${className}`}
      />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Loader.defaultProps = {
  size: 'md',
  className: '',
};

export default Loader;
