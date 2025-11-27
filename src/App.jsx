import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";

import "./App.css";
import Home from "./components/home/home.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <p><FaChalkboardTeacher /> STAFED AM3LM</p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
