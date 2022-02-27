import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import AddNotes from "./AddNotes";
import NotesItem from "./NotesItem";

const Notes = () => {
  const [showAddnNotes, setShowAddNotes] = useState(false);
  const [notesData, setNotesData] = useState([]);

  const getNotesData = (data) => {
    setNotesData((prevNotes) => [...prevNotes, data]);
  };

  const deleteNotes = (id) => {
    setNotesData(notesData.filter((data) => data.id !== id));
  };

  return (
    <>
      {showAddnNotes && (
        <AddNotes
          setShowAddNotes={setShowAddNotes}
          getNotesData={getNotesData}
        />
      )}
      <section className="notes container">
        <div className="add-notes">
          <button onClick={() => setShowAddNotes(true)}>
            <IoMdAddCircle size={18} />
            Add new notes
          </button>
        </div>

        <div className="notes-wrapper">
          {notesData.map((note, index) => (
            <NotesItem key={index} note={note} deleteNotes={deleteNotes} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Notes;
