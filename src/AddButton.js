import React from "react";
import { connect } from "react-redux";
import { addSong } from "./redux/actions";

const AddButton = ({ addSong }) => {
  const clickHandler = () => {
    addSong({ title: "hello", duration: "1:30" });
  };

  return (
    <div className="main-right">
      <button className="btn" onClick={clickHandler}>
        노래 추가!
      </button>
    </div>
  );
};

export default connect(null, { addSong })(AddButton);
