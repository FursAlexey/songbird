import React from 'react';
import './NextLevelButton.scss';

function NextLevelButton(props) {
  const { isActive, passNextLevel } = props;

  return (
    isActive
      ? <button className="next-button active" onClick={passNextLevel}>Next Level</button>
      : <button className="next-button inactive">Next Level</button>
  );
}

export default NextLevelButton;
