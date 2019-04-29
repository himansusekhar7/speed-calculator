import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../SectionHeader';
import HistoryList from '../HistoryList';

import './style.scss';

const HistoryPanel = ({sectionHeaderText, speedList}) => (
  <div className="history-panel">
    <SectionHeader
      text={sectionHeaderText}
    />
    <HistoryList
      speedList={speedList}
    />
  </div>
);

HistoryPanel.prototypes = {
  sectionHeaderText: PropTypes.string,
  speedList: PropTypes.arrayOf(PropTypes.shape({
    distance: PropTypes.number,
    time: PropTypes.number,
    speed: PropTypes.number
  }))
};

HistoryPanel.defaultProps = {
  sectionHeaderText: 'History',
  speedList: [
    {distance: 60, time: 1},
    {distance: 60, time: 2},
    {distance: 60, time: 3},
    {distance: 60, time: 4},
    {distance: 60, time: 5},
    {distance: 60, time: 6},
    {distance: 60, time: 7}
  ]
};

export default HistoryPanel;
