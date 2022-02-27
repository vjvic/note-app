import React from "react";
import { MdDelete } from "react-icons/md";

const NotesItem = ({ note, deleteNotes }) => {
  const handleDelete = (id) => {
    deleteNotes(id);
  };

  return (
    <div className="note-item">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.text}</p>
      <button className="delete-note" onClick={() => handleDelete(note.id)}>
        <MdDelete size={24} />
      </button>
    </div>
  );
};

export default NotesItem;
