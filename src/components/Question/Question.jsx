import React from 'react';
import "./Question.scss";
import AudioPlayer from '../Audioplayer/AudioPlayer';

function Question(props) {
  const { isCorrectAnswerSelected, birdForGuess } = props;
  return (
    isCorrectAnswerSelected
      ? (
        <div className="question">
          <img src={birdForGuess.image} alt={birdForGuess.name} />
          <h2 className="question-bird-name">{birdForGuess.name}</h2>
          <AudioPlayer audioUrl={birdForGuess.audio} />
        </div>
      )
      : (
        <div className="question">
          <img src="./jpg/bird_template.jpg" alt="bird_template"/>
          <h2 className="question-bird-name">****</h2>
          <AudioPlayer audioUrl={birdForGuess.audio} />
        </div>
      )
  )
}

export default Question;
