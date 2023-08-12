export default function Note({ title, text, color }) {
  return (
    <div className="note" style={{ borderColor: color, color: color }}>
      <h2 className="note-title">{title}</h2>
      <p className="note-text">{text}</p>
    </div>
  );
}
