import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TextInput = ({label, onChange, unitType, hasError}) => {
  return (
    <div className={`text-input-container ${hasError ? 'invalid' : ''}`}>
      <label>{label}</label>
      <input
        type="number"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
      <span className="text-input-container--unit">{unitType}</span>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  unitType: PropTypes.string,
  hasError: PropTypes.bool
};

TextInput.defaultProps = {
  unitType: 'miles',
  hasError: false
};

export default TextInput;