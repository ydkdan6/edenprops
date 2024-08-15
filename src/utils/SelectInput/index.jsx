import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ options, value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-4 py-2 border rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SelectInput.defaultProps = {
  value: '',
  placeholder: 'Select an option',
};

export default SelectInput;
