import React, { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import "../styles/player.css";

const Player = ({ tracks, trackIndex, setTrackIndex }) => {
  const [isRandom, setIsPandom] = useState(false);
  const [isLoop, setLoop] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // ссылка на элемент аудио
  const audioPlayerRef = useRef();
  const progressBarRef = useRef();

  const handleNextSong = () => {
    let newIndex = (trackIndex + 1) % tracks.length;
    if (isRandom) {
      do {
        newIndex = Math.floor(Math.random() * tracks.length);
      } while (trackIndex === newIndex);
    }
    setTrackIndex(newIndex);
  };

  const onLoadedMetadata = () => {
    const dur = audioPlayerRef.current.duration;
    setDuration(dur);
    progressBarRef.current.max = dur;
  };

  return (
    <div className="player">
      <TrackInfo track={tracks[trackIndex]} />
      <audio
        src={tracks[trackIndex].src}
        ref={audioPlayerRef}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={(e) => setTimeProgress(e.target.currentTime)}
        onPlay={(e) => {
          console.log("onPlay()");
        }}
        onPause={() => console.log("onPause event")}
        onEnded={handleNextSong}
        loop={isLoop}
      />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioPlayerRef={audioPlayerRef}
        timeProgress={timeProgress}
        duration={duration}
      />
      <Controls
        audioPlayerRef={audioPlayerRef}
        isRandom={isRandom}
        setIsRandom={setIsPandom}
        handleNextSong={handleNextSong}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        tracks={tracks}
        isLoop={isLoop}
        setLoop={setLoop}
      />
    </div>
  );
};

export default Player;
