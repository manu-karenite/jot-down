const express = require("express");
const NotesRouter = express.Router();
const {
  addNote,
  getNotes,
  editNote,
  deleteNote,
  changePin,
} = require("../controllers/notes.js");
NotesRouter.route("/add-note").post(addNote);
NotesRouter.route("/get-notes/:page").get(getNotes);
NotesRouter.route("/edit-note").put(editNote);
NotesRouter.route("/delete-note/:id").delete(deleteNote);
NotesRouter.route("/change-pin/:id").patch(changePin);
const object = { NotesRouter };
module.exports = object;
