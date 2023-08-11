import express from "express";
import mongoose from "mongoose";
import Note from "./schemas/Note.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
const PORT = process.env.PORT ?? 3001;

//* GET

app.get("/todos", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

//* POST

app.post("/todos/add", async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
});

//* PUT 

app.put("/todos/edit/:id", async (req, res) => {
  const noteToUpdate = await Note.findById(req.params.id);
  const {title, text} = req.body;
  noteToUpdate.title = title;
  noteToUpdate.text = text
  await noteToUpdate.save();
  res.json(noteToUpdate);
});

app.put("/todos/complete/:id", async (req, res) => {
  const noteToUpdate = await Note.findById(req.params.id);
  noteToUpdate.completed = !noteToUpdate.completed;
  await noteToUpdate.save();
  res.json(noteToUpdate);
});

app.put("/todos/new-color/:id/:color", async (req, res) => {
  const noteToUpdate = await Note.findById(req.params.id);
  noteToUpdate.color = req.params.color;
  await noteToUpdate.save();
  res.json(noteToUpdate);
});

app.put("/todos/new-keywords/:id/:keywords", async (req, res) => {
  const newKeywords = req.params.keywords.split(" ");
  const noteToUpdate = await Note.findById(req.params.id);
  noteToUpdate.keywords.push(...newKeywords);
  await noteToUpdate.save();
  res.json(noteToUpdate);
});

app.listen(PORT, () => console.log("Server initialized"));
