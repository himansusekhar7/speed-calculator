import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import TextInput from '../TextInput';

import './style.scss';

class CalculatorPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: ''
    };
  }

  changedDistance = (val) => {
    this.setState({distance: val}, () => {this.process();});
  };

  changedTime = (val) => {
    this.setState({time: val}, () => {this.process();});
  };

  process = () => {
    const { saveData } = this.props;
    const { distance, time } = this.state;
    let speed = '';
    if (time && parseInt(time) !== 0) {
      speed = Math.round((distance/time)*100)/100;
    }
    this.setState({speed});
    if (speed && saveData) {
      saveData({ distance, time, speed });
    }
  };

  render() {
    const { changedDistance, changedTime, state } = this;
    const { speed, time } = state;

    return (
      <div className="calculator-panel">
        <SectionHeader text="Speed Calculator"/>

        <div className="calculator-panel--section">
          <div className="calculator-panel--section-input">
            <TextInput
              label="Distance"
              unitType="miles"
              onChange={changedDistance}
            />
            <hr/>
            <TextInput
              label="Time"
              unitType="hours"
              onChange={changedTime}
              hasError={parseInt(time) === 0 ? true : false}
            />
          </div>
          {speed && (
            <div className="calculator-panel--section-output">
              = {speed} mph
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CalculatorPanel;