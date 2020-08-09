import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.scss';
import birdsData from '../../resources/birds';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import timeFormatting from '../../resources/timeFormatting';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(null);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  const updateTimeBar = () => {
    const currentTimeIndicator = document.body.querySelector('.time-indicator-current');
    setCurrentTime(audioRef.current.currentTime);
    console.log(currentTime, durationTime);
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
      console.log(audioRef);
    }
    audioRef.current.onended = () => {
      setIsPlaying(false);
    }
  })

  return (
    <div className="audio-player">
      <audio src={birdsData[0][0].audio} ref={audioRef} />
      {
        isPlaying
          ? <PauseCircleOutlined className="play-button" onClick={handleClick} />
          : <PlayCircleOutlined className="play-button" onClick={handleClick} />
      }
      <div className="time-bar">
        <div className="time-indicator">
          <div className="time-indicator-current"></div>
          <div className="time-indicator-pointer"></div>
          <div className="time-indicator-all"></div>
        </div>
        <div className="time">
          <span>{timeFormatting(currentTime)}</span>
          <span>{timeFormatting(durationTime)}</span>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
