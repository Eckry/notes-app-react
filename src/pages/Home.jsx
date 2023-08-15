import "./styles/Home.css";
import { useState, useEffect } from "react";
import Note from "../components/Note.jsx";

const API_BASE = "http://localhost:3001/";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const res = await fetch(`${API_BASE}todos`);
    const data = await res.json();
    setNotes(data);
  }

  return (
    <main>
      <header className="header">
        <h1 className="header-title">Your <span>Notes</span> App</h1>
      </header>
      <div className="utils">
        <div className="filters">
          <p>Word filter: </p>
          <input type="text" />
          <p>Keyword filter:</p>
          <select>
            <option value="">Hola</option>
          </select>
        </div>
        <button className="add-note">+</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => {
          return (
            <Note
              key={note._id}
              color={note.color}
              title={note.title}
              text={note.text}
            ></Note>
          );
        })}
      </div>
    </main>
  );
}
