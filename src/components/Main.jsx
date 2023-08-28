import "./style-sheets/Main.css"

export default function Main({ children, filters }) {
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
      {children}
    </main>
  );
}
