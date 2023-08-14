import "./styles/Home.css";
import { useState, useEffect } from "react";

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
    <>
      <header className="header">
        <h1 className="header-title">Your Notes App</h1>
      </header>
      <div className="utils">
        <div className="filters">
          <input type="text" />
          <select>
            <option value="">Hola</option>
          </select>
        </div>
        <button className="add-note">+</button>
      </div>
      <div className="notes-container"></div>
    </>
  );
}
