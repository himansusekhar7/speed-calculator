import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
const TextInput = ({label, unitType}) => {
  
  return (
    <div className="text-input-container">
      <label>{label}</label>
      <input
        type="number"
        ref={txtVal => (input = txtVal)}
        onChange={() => {

        }}
      />
      <span className="text-input-container-unit">{unitType}</span>
    </div>
  );
};

TextInput.propTypes = {
  unitType: PropTypes.string
};

TextInput.defaultProps = {
  unitType: 'miles'
};

export default TextInput; 