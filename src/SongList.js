import React from "react";
import { connect } from "react-redux";

const Song = ({ songList }) => {
  return (
    <div className="song-list">
      <ul>
        {songList.map((song) => (
          <li key={song.title}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songList: state.songList,
  };
};

export default connect(mapStateToProps)(Song);
