import { useState } from "react";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import { tracks } from "./data/tracks";

import "./Music.css"
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
