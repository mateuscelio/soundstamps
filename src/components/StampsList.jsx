import { store } from "../shared/store";

import { useState, useEffect } from "react";

function StampsList() {
  const [tracksState, setTracksState] = useState([]);
  useEffect(() => {
    const listTracks = async () => {
      const tracks = await store.list();
      console.log(tracks);
      setTracksState(tracks);
    };

    listTracks();
  }, []);
  const renderTrack = (track) => {
    return (
      <li key={track.link}>
        <a href={track.link}>{track.title}</a>
        <ul>
          {track.timestamps.map((ts) => renderTrackTimeStamps(ts, track))}
        </ul>
      </li>
    );
  };
  const renderTrackTimeStamps = (ts, track) => {
    return (
      <li key={ts.link}>
        <a href={ts.link}>{ts.time}</a>
        <button
          class="clear-btn"
          onClick={() => removeTrackTs(track.link, ts.link)}
        >
          Clear
        </button>
      </li>
    );
  };

  const removeTrackTs = async (trackLink, tsLink) => {
    await store.deleteTsByLink(trackLink, tsLink);
    setTracksState(await store.list());
  };
  return (
    <div>
      <div>
        <h4>Your SoundStamps</h4>
        <ul class="list">{tracksState.map((track) => renderTrack(track))}</ul>
      </div>
    </div>
  );
}

export default StampsList;
