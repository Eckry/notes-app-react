import "./styles/Home.css";
import { useState, useEffect } from "react";
import Note from "../components/Note.jsx";

const API_BASE = "http://localhost:3001/";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    word: "",
    keywords: [],
  });

  useEffect(() => {
    getNotes();
    getKeywords();
  }, []);

  async function getNotes() {
    const res = await fetch(`${API_BASE}todos`);
    const data = await res.json();
    setNotes(data);
  }

  async function getKeywords() {
    const res = await fetch(`${API_BASE}todos/keywords`);
    const data = await res.json();
    setFilters((filters) => ({ ...filters, keywords: data }));
  }

  function filterNotes(notes) {
    const regExp = new RegExp(filters.word, "i");
    const filteredNotes = notes.filter((note) => {
      return regExp.test(note.title) && (note.keyword === keyword || !keyword);
    });
    return filteredNotes;
  }

  const filteredNotes = filterNotes(notes);

  return (
    <main>
      <header className="header">
        <h1 className="header-title">
          Your <span>Notes</span> App
        </h1>
      </header>
      <div className="utils">
        <div className="filters">
          <p>Word filter: </p>
          <input
            type="text"
            value={filters.word}
            onChange={(e) =>
              setFilters((filters) => ({ ...filters, word: e.target.value }))
            }
          />
          <p>Keyword filter:</p>
          <select onChange={(e) => setKeyword(e.target.value)}>
            <option value=""></option>
            {filters.keywords.map((keyword) => (
              <option key={keyword.keyword} value={keyword.keyword}>
                {keyword.keyword}
              </option>
            ))}
          </select>
        </div>
        <button className="add-note">+</button>
      </div>
      <div className="notes-container">
        {filteredNotes.map((note) => {
          return (
            <Note
              id={note._id}
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
