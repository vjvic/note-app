import React, { useState } from "react";

const AddNotes = ({ setShowAddNotes, getNotesData }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleClose = (e) => {
    if (e.target.className === "backdrop") {
      setShowAddNotes(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      const id = Date.now();
      console.log({ id, title, text });
      getNotesData({ id, title, text });

      setText("");
      setTitle("");

      setShowAddNotes(false);
    }
  };

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
          <button className="btn">Add notes</button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
