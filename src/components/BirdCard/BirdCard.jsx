import React from 'react';
import PropTypes from 'prop-types';
import './BirdCard.scss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

function BirdCard(props) {
  const { selectedBird } = props;

  return selectedBird ? (
    <div className="bird-card">
      <img src={selectedBird.image} alt="bird_example" />
      <div className="bird-card-details">
        <h2 className="bird-card-name">{selectedBird.name}</h2>
        <span className="bird-card-name-latin">{selectedBird.species}</span>
        <AudioPlayer audioUrl={selectedBird.audio} />
      </div>
      <p className="bird-card-description">{selectedBird.description}</p>
    </div>
  ) : (
    <div className="bird-card">
      <p>Послушайте плеер. Выберите птицу.</p>
    </div>
  );
}

BirdCard.propTypes = {
  selectedBird: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
    description: PropTypes.string,
  }),
};

BirdCard.defaultProps = {
  selectedBird: null,
};

export default BirdCard;
