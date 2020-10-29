import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import './AnswerList.scss';

function AnswerList(props) {
  const {
    birdList,
    isCorrectAnswerSelected,
    birdForGuess,
    selectedAnswers,
    setSelectedAnswer,
  } = props;

  const handleClick = ({ target }) => {
    const targetElem = target;
    const index = Number(targetElem.dataset.index);
    if (!isCorrectAnswerSelected) {
      if (
        birdForGuess.name.toLowerCase() === targetElem.innerText.toLowerCase()
      ) {
        targetElem.className = 'correct';
      } else {
        targetElem.className = 'incorrect';
      }
    }
    setSelectedAnswer(index);
  };

  return (
    <div className="answer-list">
      <ul>
        {birdList.map((item, index) => (
          <li
            data-index={index}
            key={uuid()}
            className={selectedAnswers[index]}
            onClick={handleClick}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

AnswerList.propTypes = {
  birdList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    })
  ).isRequired,
  isCorrectAnswerSelected: PropTypes.bool.isRequired,
  birdForGuess: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }),
  selectedAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedAnswer: PropTypes.func.isRequired,
};

AnswerList.defaultProps = {
  birdForGuess: null,
};

export default AnswerList;
