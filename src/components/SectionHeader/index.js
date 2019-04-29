/**
 * SectionHeader component
 */

import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SectionHeader = ({ text }) => (
  <h2 className="section-header">{text}</h2>
);

SectionHeader.propTypes = {
  /**
   * This is the value to display as heading
   */
  text: PropTypes.string
};

export default SectionHeader;
