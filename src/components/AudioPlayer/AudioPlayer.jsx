import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './AudioPlayer.scss';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import timeFormatting from '../../resources/timeFormatting';

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(null);
  const [timer, setTimer] = useState(null);
  const audioRef = useRef(null);

  const { audioUrl } = props;

  const updateTimeBar = () => {
    const currentTimeIndicator = document.body.querySelector('.time-indicator-current');

    return setTimeout(() => {
      const newCurrentTime = Math.ceil(audioRef.current.currentTime);
      setCurrentTime(newCurrentTime);
      currentTimeIndicator.style.width = `${Math.round(newCurrentTime * 100 / durationTime)}%`;
      setTimer(updateTimeBar());
    }, 500)
  };

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    setTimer(updateTimeBar());
  }

  const handlePause = () => {
    clearTimeout(timer);
  }

  useEffect(() => {
    setIsPlaying(false);

    audioRef.current.oncanplay = () => {
      setDurationTime(audioRef.current.duration);
    };
    audioRef.current.onended = () => {
      setIsPlaying(false);
    };
    return () => {
      const currentTimeIndicator = document.body.querySelector('.time-indicator-current');
      currentTimeIndicator.style.width = 0;
      setCurrentTime(0);
      clearTimeout(timer);
    }
  }, [props]);

  return (
    <div className="audio-player">
      <audio src={audioUrl} ref={audioRef} onPlay={handlePlay} onPause={handlePause}>
        <track kind="captions" />
      </audio>
      {isPlaying ? (
        <PauseCircleOutlined className="play-button" onClick={handleClick} />
      ) : (
        <PlayCircleOutlined className="play-button" onClick={handleClick} />
      )}
      <div className="time-bar">
        <div className="time-indicator">
          <div className="time-indicator-current" />
          <div className="time-indicator-pointer" />
          <div className="time-indicator-duration" />
        </div>
        <div className="time-values">
          <span>{timeFormatting(currentTime)}</span>
          <span>{timeFormatting(durationTime)}</span>
        </div>
      </div>
    </div>
  );
}

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string.isRequired,
};

export default AudioPlayer;
