import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../SectionHeader';
import TextInput from '../TextInput';

import './style.scss';

const CalculatorPanel = ({unitType}) => {

  return (
    <div className="calculator-panel">
      <SectionHeader text="Speed Calculator"/>

      <div className="calculator-panel--section">
        <div className="calculator-panel--section-input">
          <TextInput
            label="Distance"
            unitType="miles"
          />
          <hr/>
          <TextInput
            label="Time"
            unitType="hours"
          />
        </div>
        <div className="calculator-panel--section-output">
          = 60 mph
        </div>
      </div>
    </div>
  )
};

export default CalculatorPanel;