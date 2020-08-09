import React from 'react';
import "./Question.scss";
import AudioPlayer from '../Audioplayer/AudioPlayer';

function Question() {
  return (
    <div className="Question">
      <img src="./jpg/bird_template.jpg" alt="bird_template"/>
      <h2>****</h2>
      <AudioPlayer />
    </div>
  )
}

export default Question;
