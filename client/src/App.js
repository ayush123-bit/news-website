import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Import your HomePage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>News Website</h1>
          <p>Welcome to our website! Stay updated with the latest news.</p>
        </header>

        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
