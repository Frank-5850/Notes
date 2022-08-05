const Note = require("../models/noteModel");

module.exports = {
  createNote: async (req, res) => {
    try {
      const { name, body } = req.body;
      const newNote = new Note({
        name: name || "anonymous",
        body: body || " ",
      });
      const savedNote = await newNote.save();
      console.log("hello");
      res.status(201).json(savedNote);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  readAllNotes: async (req, res) => {
    try {
      const allNotes = await Note.find({});
      res.status(200).json(allNotes);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateNote: async (req, res) => {
    try {
      const { name, body } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        {
          name: name || "anonymous",
          body: body || " ",
        },
        { new: true }
      );
      res.status(200).json(updatedNote);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteNote: async (req, res) => {
    try {
      const deletedNote = await Note.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedNote);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
