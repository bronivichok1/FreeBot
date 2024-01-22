import React, { useEffect, useState } from "react";
// Импорты svg-иконок как компонентов React
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "../assets/icons/pause.svg";
import { ReactComponent as RepeatIcon } from "../assets/icons/repeat.svg";
import { ReactComponent as RepeatClickedIcon } from "../assets/icons/repeat-clicked.svg";
import { ReactComponent as ShuffleIcon } from "../assets/icons/shuffle.svg";
import { ReactComponent as ShuffleClickedIcon } from "../assets/icons/shuffle-clicked.svg";
import { ReactComponent as SkipIcon } from "../assets/icons/play_skip_back.svg";
import { ReactComponent as RewindIcon } from "../assets/icons/rewind.svg";
// Импорт стилей
import "../styles/controls.css";

const Controls = ({
  audioPlayerRef,
  isRandom,
  setIsRandom,
  handleNextSong,
  trackIndex,
  setTrackIndex,
  tracks,
  isLoop,
  setLoop,
}) => {
  // Состояние - воспроизводиться ли музыка
  const [isPlaying, setIsPlaying] = useState(false);

  // Нажатие на кнопку Play/Pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  // Переключение на предыдущую песню
  const previousSong = () => {
    setTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };
  // Включение/отключение функции Shuffle
  const handleShuffle = () => {
    setIsRandom((prev) => !prev);
  };
  // Перемотка трека на 10 секунд вперед
  const handlePlayForward = () => {
    audioPlayerRef.current.currentTime += 10;
  };
  // Перемотка трека на 10 секунд назад
  const handlePlayBack = () => {
    audioPlayerRef.current.currentTime -= 10;
  };
  // Включение/отключение функции Loop
  const handleLooping = () => {
    setLoop((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  }, [isPlaying, audioPlayerRef, trackIndex]);

  return (
    <div className="controls">
      <button className="control-btn less" onClick={handleShuffle}>
        {isRandom ? <ShuffleClickedIcon /> : <ShuffleIcon />}
      </button>
      <button className="control-btn less" onClick={previousSong}>
        <SkipIcon />
      </button>
      <button className="control-btn less" onClick={handlePlayBack}>
        <RewindIcon />
      </button>
      <button className="control-btn play" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        className="control-btn reflected less"
        onClick={handlePlayForward}
      >
        <RewindIcon />
      </button>
      <button className="control-btn reflected less" onClick={handleNextSong}>
        <SkipIcon />
      </button>
      <button className="control-btn less" onClick={handleLooping}>
        {isLoop ? <RepeatClickedIcon /> : <RepeatIcon />}
      </button>
    </div>
  );
};

export default Controls;
