import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

import './AudioPlayer.scss';

import timeFormatting from '../../resources/timeFormatting';

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(null);
  const [timer, setTimer] = useState(null);
  const [divId] = useState(uuid());
  const audioRef = useRef(null);

  const { audioUrl } = props;

  const updateTimeBar = () => {
    const currentTimeIndicator = document.getElementById(divId);

    return setTimeout(() => {
      const newCurrentTime = Math.ceil(audioRef.current.currentTime);
      setCurrentTime(newCurrentTime);
      currentTimeIndicator.style.width = `${Math.round(
        (newCurrentTime * 100) / durationTime
      )}%`;
      setTimer(updateTimeBar());
    }, 500);
  };

  const disableAnotherAudioPlayers = () => {
    const audioPlayers = document.body.querySelectorAll('audio');
    audioPlayers.forEach((player) => {
      player.pause();
    });
  };

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      disableAnotherAudioPlayers();
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setTimer(updateTimeBar());
  };

  const handlePause = () => {
    setIsPlaying(false);
    clearTimeout(timer);
  };

  useEffect(() => {
    const currentTimeIndicator = document.getElementById(divId);
    currentTimeIndicator.style.width = '0';
    setCurrentTime(0);
    setIsPlaying(false);
    clearInterval(timer);
    audioRef.current.oncanplay = () => {
      setDurationTime(audioRef.current.duration);
    };
    audioRef.current.onended = () => {
      setIsPlaying(false);
    };
  }, [audioUrl]);

  return (
    <div className="audio-player">
      <audio
        src={audioUrl}
        ref={audioRef}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <track kind="captions" />
      </audio>
      {isPlaying ? (
        <PauseCircleOutlined className="play-button" onClick={handleClick} />
      ) : (
        <PlayCircleOutlined className="play-button" onClick={handleClick} />
      )}
      <div className="time-bar">
        <div className="time-indicator">
          <div className="time-indicator-current" id={divId} />
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
