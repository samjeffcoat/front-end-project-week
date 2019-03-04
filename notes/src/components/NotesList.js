import React from "react";

function NotesList(props) {
  return (
    <div className="notes-list-wrapper">
      {props.notes.map(note => (
        <div className="note-card" key={note.id}>
          <p>{note.title}</p>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
