import React from "react";
import { ReactComponent as DefaultCover } from "../assets/icons/default_cover.svg";

import "../styles/track-card.css";

const TrackCard = ({ track, onChoose, isActive }) => {
  const className = isActive ? "track-card active" : "track-card";

  return (
    <div className={className} onClick={onChoose}>
      <div className="cover-div">
        {track.cover ? (
          <img
            src={track.cover}
            alt={`Song cover: ${track.title} by ${track.artist}`}
          />
        ) : (
          <DefaultCover />
        )}
        {isActive && (
          <div className="soundwave">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div>

      <div className="info-div">
        <h3>{track?.title}</h3>
        <p>{track?.artist}</p>
      </div>

      <div className="duration-div">
        <p>{track.duration}</p>
      </div>
    </div>
  );
};

export default TrackCard;
