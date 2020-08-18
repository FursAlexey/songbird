import React from 'react';
import { v4 as uuid } from 'uuid';
import './AnswerList.scss';

function AnswerList(props) {
  const { birdList, correctAnswerSelected, birdForGuess, selectedAnswers, setSelectedAnswer } = props;

  const handleClick = ({ target }) => {
    const index = Number(target.dataset.index);
    if (!correctAnswerSelected) {
      if (birdForGuess.name.toLowerCase() === target.innerText.toLowerCase()) {
        target.className = 'correct';
      } else {
        target.className = 'incorrect';
      }
    }
    setSelectedAnswer(index);
  }

  return (
    <div className="answer-list">
      <ul>
        {birdList.map((item, index) => (
          <li
            data-index={index}
            key={uuid()}
            className={selectedAnswers[index]}
            onClick={handleClick}>{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerList;
