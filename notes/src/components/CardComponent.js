import React from "react";

const Card = props => {
  if (props.noteView) {
    return (
      <div className="card-container">
        <div className="title-container">
          <h2>{props.note.title}</h2>
        </div>
        <div className="text-containter">
          <p>{props.note.textBody}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card-container-main">
      <div className="title-container-main">
        <h2>{props.note.title}</h2>
      </div>
      <div className="body-container">
        <p>{props.note.textBody}</p>
      </div>
    </div>
  );
};

export default Card;
