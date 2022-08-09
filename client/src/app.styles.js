import styled from "styled-components";
import { MdAdd } from "react-icons/md";

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  font-size: 2em;
`;

export const HeaderText = styled.h1`
  margin: 0;
`;

export const AddIcon = styled(MdAdd)`
  color: white;
  align-self: end;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid green;
    cursor: pointer;
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-flow: row wrap;
`;

export const NoteCard = styled.div`
  width: 225px;
  height: 200px;
  margin: 20px;
  background-color: #1a1a1a;
  border-radius: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid green;
    box-shadow: 0px 0px 30px 3px rgba(0, 255, 117, 0.3);
  }
`;

export const NoteHeader = styled.h3`
  padding: 10px 0;
  margin: 0;
`;

export const NoteBody = styled.div`
  padding: 10px 15px;
  text-align: left;
`;

export const BodyText = styled.p`
  margin: 0;
`;
