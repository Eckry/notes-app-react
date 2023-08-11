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

app.get("/todos", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.listen(PORT, () => console.log("Server initialized"));
