import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
    </Routes>
  );
}

export default App;
