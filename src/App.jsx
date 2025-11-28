import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";

import "./App.css";
import Home from "./components/home/home.jsx";
import About from "./components/About/About.jsx";
import UserInfo from "./components/UserInfo/UserInfo.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <p>
            <FaChalkboardTeacher />
          </p>
          <ul>
            <li>
              <Link to={"/testUsers/"}>Home</Link>
            </li>
            <li>
              <Link to={"/testUsers/about"}>About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/testUsers/" element={<Home />} />
          <Route path="/testUsers/about" element={<About />} />
          <Route path="/testUsers/user/:id" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
