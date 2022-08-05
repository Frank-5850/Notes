import styled from "styled-components";

export const NoteWrapper = styled.div`
  z-index: 10;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgb(51, 51, 51, 0.8);
  background-cover: fill;
`;

export const NoteContainer = styled.div`
  background: #1a1a1a;
  z-index: 1;
  position: absolute;
  border-radius: 15px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const HeaderText = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  padding: 5px;
  border: 0.5px solid white;
  margin-bottom: 15px;
  background-color: #1a1a1a;
  color: white;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
  border: 0.5px solid white;
  resize: none;
  background-color: #1a1a1a;
  color: white;
`;

export const ConfirmButton = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
`;
