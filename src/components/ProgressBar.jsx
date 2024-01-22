import React, { useEffect } from "react";
import { formatTime } from "../utils";
import "../styles/progress-bar.css";

const ProgressBar = ({
  progressBarRef,
  audioPlayerRef,
  timeProgress,
  duration,
}) => {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    const maxValue = e.target.max || 100;
    const fillPercentage = (currentValue / maxValue) * 100;
    audioPlayerRef.current.currentTime = currentValue;

    progressBarRef.current.style.setProperty(
      "--fill-percentage",
      fillPercentage + "%"
    );
  };

  useEffect(() => {
    const currentValue = progressBarRef.current.value;
    const maxValue = progressBarRef.current.max || 100;
    const fillPercentage = (currentValue / maxValue) * 100;
    progressBarRef.current.style.setProperty(
      "--fill-percentage",
      fillPercentage + "%"
    );
  }, [timeProgress, duration, progressBarRef]);

  return (
    <div className="progress-bar">
      <input
        type="range"
        ref={progressBarRef}
        value={timeProgress}
        onChange={(e) => handleChange(e)}
      />
      <div className="time-info">
        <span id="time-progress">{formatTime(timeProgress)}</span>
        <span id="duration">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
