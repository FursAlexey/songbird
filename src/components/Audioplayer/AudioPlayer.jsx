import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.scss';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import timeFormatting from '../../resources/timeFormatting';

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(null);
  const audioRef = useRef(null);

  const { audioUrl } = props;

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  const updateTimeBar = () => {
    const currentTimeIndicator = document.body.querySelector('.time-indicator-current');
    setCurrentTime(audioRef.current.currentTime);
    currentTimeIndicator.style.width = `${currentTime * 100 / durationTime}%`;
  }

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      audioRef.current.play();
      timer = setTimeout(updateTimeBar, 1000);
    } else {
      audioRef.current.pause();
      clearTimeout(timer);
    }
  })

  useEffect(() => {
    audioRef.current.oncanplay = () => {
      setDurationTime(audioRef.current.duration);
    }
    audioRef.current.onended = () => {
      setIsPlaying(false);
    }
  })

  return (
    <div className="audio-player">
      <audio src={audioUrl} ref={audioRef} />
      {
        isPlaying
          ? <PauseCircleOutlined className="play-button" onClick={handleClick} />
          : <PlayCircleOutlined className="play-button" onClick={handleClick} />
      }
      <div className="time-bar">
        <div className="time-indicator">
          <div className="time-indicator-current"></div>
          <div className="time-indicator-pointer"></div>
          <div className="time-indicator-duration"></div>
        </div>
        <div className="time-values">
          <span>{timeFormatting(currentTime)}</span>
          <span>{timeFormatting(durationTime)}</span>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
