import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../SectionHeader';
import HistoryList from '../HistoryList';

import './style.css';

const HistoryPanel = () => (
  <div className="history-section">
    <SectionHeader text="History" />
    <HistoryList
      speedList={[
        {distance: 60, time: 1},
        {distance: 60, time: 2},
        {distance: 60, time: 3},
        {distance: 60, time: 4},
        {distance: 60, time: 5},
        {distance: 60, time: 6},
      ]}
    />
  </div>
);

export default HistoryPanel;
