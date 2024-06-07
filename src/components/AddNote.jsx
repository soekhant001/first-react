import React, { useRef, useState } from "react";

const AddNote = ({ getNotes }) => {
  const note = useRef();
  //   let textNote = note.current.value;

  const addNote = async (e) => {
    e.preventDefault();
    // const [error, setError] = useState(null);

    try {
      await fetch("https://firenote-k-default-rtdb.firebaseio.com/notes.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note.current.value),
      });
      getNotes();
      note.current.value = "";
    } catch (err) {
      alert("some thing went wrong try again later");
    }
  };
  return (
    <section className="bg-yellow-400 px-6 py-4 rounded-md mb-5">
      <form onSubmit={addNote} className="flex justify-between gap-4">
        <input
          ref={note}
          type="text"
          placeholder="add note"
          className="border rounded-md text-lg px-4 py-2 bg-neutral-50 flex-1"
        />
        <button
          type="submit"
          className="p-4 text-slate-800 bg-slate-200 font-semibold rounded-md active:scale-90 duration-200 "
        >
          Add Note
        </button>
      </form>
    </section>
  );
};

export default AddNote;
