import React from "react";

function Task({text, category, index, onRemove}) {
  function handleOnClick() {
    onRemove(index);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleOnClick}>X</button>
    </div>
  );
}

export default Task;
