import "./style-sheets/Note.css";
import { Link } from "react-router-dom";

export default function Note({ id, title, text, color, onClick }) {
  return (
    <div className="note">
      <button onClick={() => onClick(id)} className="note-button" style={{ borderColor: color }}>
        <Link to={"/edit/" + id}>+</Link>
      </button>
      <div
        className="text-container"
        style={{ borderColor: color, color: color }}
      >
        <h2
          className="note-title"
          style={{ borderBottom: `1px ${color} solid` }}
        >
          {title}
        </h2>
        <p className="note-text">{text}</p>
      </div>
    </div>
  );
}
