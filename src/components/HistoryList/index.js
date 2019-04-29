import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HistoryList = ({speedList}) => {

  const list = speedList.map((sl) => {

    return (
      <li>{sl.distance} / {sl.time} = {sl.speed} mph</li>
    );
  });

  return speedList && (
    <ul className="history-list">
      {list}
    </ul>
  );
};

HistoryList.propTypes = {
  speedList: PropTypes.arrayOf({
    distance: PropTypes.number,
    time: PropTypes.number,
    speed: PropTypes.number
  })
};

export default HistoryList;
