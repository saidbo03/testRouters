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
              <Link to={"/testRouters/"}>Home</Link>
            </li>
            <li>
              <Link to={"/testRouters/about"}>About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/testRouters/" element={<Home />} />
          <Route path="/testRouters/about" element={<About />} />
          <Route path="/testRouters/user/:id" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
