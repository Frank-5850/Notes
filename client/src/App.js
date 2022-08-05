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
import { getNotes } from "./api";
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
          </NoteCard>
        ))}
      </NotesContainer>
    </div>
  );
}

export default App;
