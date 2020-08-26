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
      Продолжить
    </button>
  ) : (
    <button type="button" className="next-button inactive">
      Продолжить
    </button>
  );
}

NextLevelButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  goToNextLevel: PropTypes.func.isRequired,
};

export default NextLevelButton;
