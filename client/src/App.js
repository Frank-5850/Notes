import "./App.css";
import {
  HeaderContainer,
  NotesContainer,
  NoteName,
  NoteCard,
  NoteBody,
  AddIcon,
  HeaderText,
  DeleteButton,
  DateCreated,
  CardHeader,
  LastUpdated,
  LastUpdatedDate,
  CardFooter,
} from "./app.styles";
import { deleteNote, getNotes } from "./api";
import { useEffect, useState } from "react";
import AddNoteModal from "./AddNoteModal/AddNoteModal";
import moment from "moment";

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
            <CardHeader>
              <LastUpdated>Last Updated:</LastUpdated>
              <LastUpdatedDate>
                {moment(note.updatedAt).format("MM/DD/YY")}
              </LastUpdatedDate>
              <DeleteButton onClick={() => removeNote(note._id)}>
                X
              </DeleteButton>
            </CardHeader>
            <NoteBody>{note.body}</NoteBody>
            <CardFooter>
              <DateCreated>
                Created: {moment(note.createdAt).format("MM/DD/YY")}
              </DateCreated>
              <NoteName>{note.name}</NoteName>
            </CardFooter>
          </NoteCard>
        ))}
      </NotesContainer>
    </div>
  );
}

export default App;
