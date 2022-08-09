import "./App.css";
import {
  HeaderContainer,
  NotesContainer,
  NoteHeader,
  NoteCard,
  NoteBody,
  AddIcon,
  HeaderText,
} from "./app.styles";
import { deleteNote, getNotes } from "./api";
import { useEffect, useState } from "react";
import AddNoteModal from "./AddNoteModal/AddNoteModal";

function App() {
  const [notes, setNotes] = useState();
  const [showModal, setShowModal] = useState(false);

  const getAllNotes = async () => {
    try {
      const notes = await getNotes();
      setNotes(notes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, [showModal]);

  const removeNote = async (id) => {
    try {
      const data = await deleteNote(id);
      // console.log("data", data);
      setNotes(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {showModal && <AddNoteModal setShowModal={setShowModal} />}
      <HeaderContainer>
        <HeaderText>Notes Notes Notes!</HeaderText>
        <AddIcon onClick={() => setShowModal(true)} />
      </HeaderContainer>
      <NotesContainer>
        {notes?.map((note, i) => (
          <NoteCard key={i}>
            <NoteHeader>{note.name}</NoteHeader>
            <NoteBody>{note.body}</NoteBody>
            <button onClick={() => removeNote(note._id)}>X</button>
          </NoteCard>
        ))}
      </NotesContainer>
    </div>
  );
}

export default App;
