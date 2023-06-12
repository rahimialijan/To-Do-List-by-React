import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ className, text, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {text}
  </button>
);

Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
