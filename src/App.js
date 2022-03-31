import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Info from "./Info";
import Pics from "./Pics";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header className="header">
          <p className="header-title">SchikiNiki</p>
          <div>
            <Link className="header-link" to="/">
              PICS
            </Link>
            <Link className="header-link" to="/info">
              INFO
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Pics />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
        <footer className="footer">
          <span className="footer-text">
            SchikiNiki // Katowice, Nikiszowiec, Poland // info@schikiniki.com
            // +48 606-758-200
          </span>
        </footer>
      </div>
    </Router>
  );
}
