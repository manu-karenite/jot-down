const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    pinned: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const notes = mongoose.model("notes", NoteSchema);
module.exports = notes;
