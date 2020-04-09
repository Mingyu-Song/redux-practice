import React from "react";

const Song = ({ songs }) => {
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.title}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Song;
