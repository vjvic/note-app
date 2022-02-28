import React, { useState, useEffect } from "react";

const AddNotes = ({
  setShowAddNotes,
  getNotesData,
  editItem,
  editNotesSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const edit = editItem ? true : false;

  const handleClose = (e) => {
    if (e.target.className === "backdrop") {
      setShowAddNotes(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      editNotesSubmit({ id: editItem.id, title, text });

      setText("");
      setTitle("");

      setShowAddNotes(false);
    }

    if (title && text && !edit) {
      const id = Date.now();
      console.log({ id, title, text });
      getNotesData({ id, title, text });

      setText("");
      setTitle("");

      setShowAddNotes(false);
    }
  };

  useEffect(() => {
    if (edit) {
      setTitle(editItem.title);
      setText(editItem.text);
    }
  }, [edit, editItem]);

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="add-notes-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="4"
            cols="50"
            placeholder="write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn">{edit ? "Update notes" : "Add notes"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
