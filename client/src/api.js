import axios from "axios";
const URL = "http://localhost:8080";

export const getNotes = async () => {
  try {
    const notes = await axios.get(`${URL}/api/get/notes`);
    return notes;
  } catch (error) {
    console.log(error);
  }
};

export const addNote = async (note) => {
  try {
    await axios.post(`${URL}/api/create/note`, note);
    return "success";
  } catch (error) {
    console.log(error);
  }
};
