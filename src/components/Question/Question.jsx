import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

import birdTemplate from '../../images/jpg/bird_template.jpg';

function Question(props) {
  const { isCorrectAnswerSelected, birdForGuess } = props;

  if (isCorrectAnswerSelected) {
    return (
      <div className="question">
        <img src={birdForGuess.image} alt={birdForGuess.name} />
        <h2 className="question-bird-name">{birdForGuess.name}</h2>
        <AudioPlayer audioUrl={birdForGuess.audio} />
      </div>
    );
  }
  if (birdForGuess) {
    return (
      <div className="question">
        <img src={birdTemplate} alt="bird_template" />
        <h2 className="question-bird-name">****</h2>
        <AudioPlayer audioUrl={birdForGuess.audio} />
      </div>
    );
  }
  return null;
}

Question.propTypes = {
  isCorrectAnswerSelected: PropTypes.bool.isRequired,
  birdForGuess: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Question;
