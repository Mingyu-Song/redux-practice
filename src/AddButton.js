import React from "react";

const AddButton = () => {
  const onClick = () => {
    console.log("clicked!");
  };

  return (
    <div className="main-right">
      <button className="btn" onClick={onClick}>
        노래 추가!
      </button>
    </div>
  );
};

export default AddButton;
