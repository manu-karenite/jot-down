const notes = require("../models/note.js");

const addNote = async (req, res) => {
  console.log(req.body);
  try {
    const q = new notes({
      title: req.body.title,
      tagline: req.body.tagline,
      text: req.body.text,
    });
    const result = await q.save();
    console.log(result);
    res.status(201).json("Created");
  } catch (error) {
    res.status(401).json(error);
  }
};
const getNotes = async (req, res) => {
  console.log("page number", req.params?.page);
  try {
    const result1 = await notes.find({ pinned: true });
    const result2 = await notes.find({ pinned: false });
    const ans = [...result1, ...result2];
    res.status(200).json({
      total: result1.length + result2.length,
      data: ans.slice((req.params?.page - 1) * 6, req.params?.page * 6),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const editNote = async (req, res) => {
  try {
    const result = await notes.findByIdAndUpdate(
      req.body.id,
      { title: req.body.title, tagline: req.body.tagline, text: req.body.text },
      { new: true }
    );
    res.status(200).json("Modified");
  } catch (error) {
    res.status(400).json(error);
  }
};
const deleteNote = async (req, res) => {
  console.log(req.params);
  try {
    const result = await notes.findByIdAndDelete(req.params.id);
    console.log("Note Deleted");
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(400).json(error);
  }
};
const changePin = async (req, res) => {
  console.log(req.params);
  try {
    const result = await notes.findByIdAndUpdate(req.params.id, {
      pinned: req.body?.status,
    });
    console.log("Changed Status");
    res.status(200).json("Changed Status");
  } catch (error) {
    res.status(400).json(error);
  }
};
const obj = { addNote, getNotes, editNote, deleteNote, changePin };
module.exports = obj;
