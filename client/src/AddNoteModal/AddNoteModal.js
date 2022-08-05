import React, { useState } from "react";
import { addNote } from "../api";
import {
  NoteContainer,
  NoteWrapper,
  Header,
  HeaderText,
  Form,
  Input,
  ConfirmButton,
  CloseButton,
  TextArea,
} from "./noteModal.styles";

const UpdateCategory = ({ setShowModal }) => {
  const [values, setValues] = useState({
    name: "",
    body: "",
  });
  const { name, body } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addNote(values);
      console.log("hello", data);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteWrapper onClick={() => setShowModal(false)}>
      <NoteContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
        <Header>
          <HeaderText>Add New Note!</HeaderText>
        </Header>
        <Form onSubmit={handleSubmit}>
          <TextArea
            placeholder="Add notes here"
            onChange={handleChange("body")}
            type="text"
            value={body}
          />
          <Input
            placeholder="Creator name"
            onChange={handleChange("name")}
            type="text"
            value={name}
          />
          <ConfirmButton onClick={(e) => handleSubmit(e)}>
            Add note!
          </ConfirmButton>
        </Form>
      </NoteContainer>
    </NoteWrapper>
  );
};

export default UpdateCategory;
