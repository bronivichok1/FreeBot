import { useState } from "react";
import "./Music.css";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import { tracks } from "./data/tracks";

function Music() {
  const [trackIndex, setTrackIndex] = useState(0);

  return (
    <div className="Music">
      <Playlist
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
      <Player
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
    </div>
  );
}

export default Music;
