import React from 'react';
import PropTypes from 'prop-types';
import './NextLevelButton.scss';

function NextLevelButton(props) {
  const { isActive, goToNextLevel } = props;

  return isActive ? (
    <button
      type="button"
      className="next-button active"
      onClick={goToNextLevel}
    >
      Next Level
    </button>
  ) : (
    <button type="button" className="next-button inactive">
      Next Level
    </button>
  );
}

NextLevelButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  goToNextLevel: PropTypes.func.isRequired,
};

export default NextLevelButton;
