import React from 'react';
import './BirdCard.scss';
import AudioPlayer from '../Audioplayer/AudioPlayer';

function BirdCard(props) {
  const { selectedBird } = props;

  return (
    selectedBird
      ? (
        <div className="bird-card">
          <img src={selectedBird.image} alt="bird_example"/>
          <div className="bird-card-details">
            <h2 className="bird-card-name">{selectedBird.name}</h2>
            <span className="bird-card-name-latin">{selectedBird.species}</span>
            <AudioPlayer />
          </div>
          <p className="bird-card-description">{selectedBird.description}</p>
        </div>
      )
      : (
        <div className="bird-card">
          <p>Послушайте плеер. Выберите птицу.</p>
        </div>
      )
  );
}

export default BirdCard;
