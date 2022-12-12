import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import Chat from "./Chat";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
