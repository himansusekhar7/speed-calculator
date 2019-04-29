import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../SectionHeader';
import HistoryList from '../HistoryList';

import './style.scss';

const HistoryPanel = ({sectionHeaderText, speedList}) => (
  <div className="history-panel">
    <SectionHeader text={sectionHeaderText} />
    <HistoryList speedList={speedList} />
  </div>
);

HistoryPanel.prototypes = {
  sectionHeaderText: PropTypes.string,
  speedList: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number,
      time: PropTypes.number,
      speed: PropTypes.number
    })
  )
};

HistoryPanel.defaultProps = {
  sectionHeaderText: 'History'
};

export default HistoryPanel;
