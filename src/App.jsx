import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./components/providers/AppProviders";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)}/>
      </div>
    </AppProviders>

  );
}

export default App;
