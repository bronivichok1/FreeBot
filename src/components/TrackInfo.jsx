import React from "react";
import { ReactComponent as DefaultCover } from "../assets/icons/default_cover.svg";

import "../styles/track-info.css";

const TrackInfo = ({ track }) => {
  return (
    <div className="track-info">
      <div className="track-cover">
        {track.cover ? (
          <img
            src={track.cover}
            alt={`Song cover: ${track.title} by ${track.artist}`}
          />
        ) : (
          <DefaultCover />
        )}
      </div>
      <div className="track-title">
        <h1>{track?.title}</h1>
        <h3>{track?.artist}</h3>
      </div>
    </div>
  );
};

export default TrackInfo;
