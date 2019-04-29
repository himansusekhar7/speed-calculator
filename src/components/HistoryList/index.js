import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HistoryList = ({speedList}) => {
  const list = speedList && speedList.map((sl, index) => {
    return <li key={`speedList-${index}`}>{sl.distance} / {sl.time} = {sl.speed} mph</li>
  });

  return (
    <ul className="history-list">
      {list}
    </ul>
  );
};

HistoryList.propTypes = {
  speedList: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number,
      time: PropTypes.number,
      speed: PropTypes.number
    })
  )
};

export default HistoryList;
