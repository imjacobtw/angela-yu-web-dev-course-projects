import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import STARTING_NOTES from "./data/notes";

export default function App() {
  const [notes, setNotes] = useState(STARTING_NOTES);

  function addNote(title, content) {
    const lastNote = notes.slice(-1)[0];
    const key = lastNote ? lastNote.key + 1 : 1;
    const newNote = { key, title, content };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(key) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key !== key);
    });
  }

  const mappedNotes = notes.map((note) => {
    return (
      <Note
        key={note.key}
        id={note.key}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  });

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {mappedNotes}
      <Footer />
    </div>
  );
}
