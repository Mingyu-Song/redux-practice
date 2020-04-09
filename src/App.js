import React from "react";
import SongList from "./SongList";
import AddButton from "./AddButton";
import "./App.css";

const songList = [
  { title: "songA", duration: "3:12" },
  { title: "songB", duration: "2:39" },
  { title: "songC", duration: "3:41" },
  { title: "songD", duration: "2:59" },
];

const App = () => {
  return (
    <div className="App">
      <div className="header">쥬크박스</div>
      <div className="main">
        <SongList songs={songList} />
        <AddButton />
      </div>
    </div>
  );
};

export default App;
