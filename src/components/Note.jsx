import "./style-sheets/Note.css"

export default function Note({ title, text, color }) {
  return (
    <div className="note" style={{ borderColor: color, color: color }}>
      <h2 className="note-title" style={{borderBottom: `1px ${color} solid`}}>{title}</h2>
      <p className="note-text" >{text}</p>
    </div>
  );
}
