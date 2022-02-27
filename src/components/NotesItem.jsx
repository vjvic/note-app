import React from "react";

const NotesItem = ({ note }) => {
  return (
    <div className="note-item">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.text}</p>
    </div>
  );
};

export default NotesItem;
