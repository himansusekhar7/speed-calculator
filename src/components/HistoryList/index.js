import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const HistoryList = ({speedList, listLimit}) => {

  const list = speedList.map((sl, counter) => {

    return (++counter <= listLimit) &&(
      <li>${sl.distance} / ${sl.time} = ${sl.distance/sl.time} mph</li>
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
    time: PropTypes.number
  }),
  listLimit: PropTypes.number
};

HistoryList.defaultProps = {
  listLimit: 5
};

export default HistoryList;
