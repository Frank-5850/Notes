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
  padding: 10px;
  background-color: #1a1a1a;
  border-radius: 20px;
  border: 1px solid transparent;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  &:hover {
    border: 1px solid green;
    box-shadow: 0px 0px 30px 3px rgba(0, 255, 117, 0.3);
  }
`;

export const NoteName = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

export const NoteBody = styled.div`
  width: auto;
  height: 70%;
  margin-top: 10px;
  text-align: left;
`;

export const BodyText = styled.p`
  margin: 0;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: white;
  margin: 3px;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 15px;
  &: hover {
    cursor: pointer;
  }
`;

export const DateCreated = styled.div`
  font-size: 12px;
  color: lightgrey;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border-bottom: 1px solid grey;
  position: relative;
  padding-bottom: 4px;
`;

export const LastUpdated = styled.p`
  color: lightgrey;
  margin: 0;
  font-size: 10px;
`;

export const LastUpdatedDate = styled.p`
  color: lightgrey;
  margin: 3px 10px;
  font-size: 12px;
  font-weight: bold;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
