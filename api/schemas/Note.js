import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  color: { type: String, default: "white" },
  keywords: { type: Array, required: false },
}, {
  timestamps: true,
});

export default model("Note", NoteSchema);