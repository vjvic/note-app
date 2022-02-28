import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const NotesItem = ({ note, deleteNotes, editNotes }) => {
  const handleDelete = (id) => {
    deleteNotes(id);
  };

  const handleEdit = (id) => {
    editNotes(id);
  };

  return (
    <div className="note-item">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.text}</p>
      <div className="note-actions">
        <button onClick={() => handleEdit(note.id)}>
          <MdEdit size={24} />
        </button>
        <button onClick={() => handleDelete(note.id)}>
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
