const router = require("express").Router();
const {
  createNote,
  readAllNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/create/note", createNote);
router.get("/get/notes", readAllNotes);
router.put("/update/note/:id", updateNote);
router.delete("/delete/note/:id", deleteNote);

module.exports = router;
