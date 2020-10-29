import React from 'react';
import PropTypes from 'prop-types';

import './EndGame.scss';

function EndGame(props) {
  const { score, playNewGame } = props;

  let phrase;
  let isResultSuccess = false;

  if (score === 25) {
    phrase = 'Вы великолепны!';
    isResultSuccess = true;
  } else if (score < 25 && score > 10) {
    phrase = 'Не отлично, но и не ужасно';
  } else {
    phrase = 'Мда, можно было и постараться чуток';
  }

  return (
    <div className={isResultSuccess ? 'end-game success' : 'end-game fail'}>
      <h2>Ваш счет: {score} из 25</h2>
      <h1>{phrase}</h1>
      <button className="play-again-button" type="button" onClick={playNewGame}>
        Сыграть еще
      </button>
    </div>
  );
}

EndGame.propTypes = {
  score: PropTypes.number.isRequired,
  playNewGame: PropTypes.func.isRequired,
};

export default EndGame;
