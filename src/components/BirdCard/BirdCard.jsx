import React from 'react';
import './BirdCard.scss';
import AudioPlayer from '../Audioplayer/AudioPlayer';

function BirdCard() {
  return (
    <div className="bird-card">
      <img src="./jpg/bird_example.jpg" alt="bird_example"/>
      <div className="bird-card-details">
        <h2 className="bird-card-name">Ворон</h2>
        <span className="bird-card-name-latin">Corvus corax</span>
        <AudioPlayer />
      </div>
      <p className="bird-card-description">Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
        Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны
        улетят от Тауэра, монархия рухнет.</p>
    </div>
  );
}

export default BirdCard;
