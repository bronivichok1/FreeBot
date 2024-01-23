import React from "react";
import TrackCard from "./TrackCard";
import "../styles/playlist.css";

const Playlist = ({ tracks, trackIndex, setTrackIndex }) => {
  const handleChooseTrack = (index) => {
    setTrackIndex(index);
  };

  return (
    <div className="playlist">
      {tracks.map((track, index) => (
        <TrackCard
          key={track.id}
          track={track}
          onChoose={() => handleChooseTrack(index)}
          isActive={index === trackIndex}
        />
      ))}
    </div>
  );
};

export default Playlist;
