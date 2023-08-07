import { useState } from "react";

import "./App.css";
import logo from "./assets/prakriti.jpeg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/ContactUs";
import Zoomclass from "./Pages/Zoomclass";
import Test from "./Pages/Test";
import LoginSignup from "./Pages/LoginSignup";
import Donate from "./Pages/Donate";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <div className="logo-head">
          <img src={logo} className="logo" alt="LOGO" />
          <p> Prakriti MPPSC </p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/zoomclasses">Zoom Classes</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/authentication">Login/SignUP</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <article></article>
        <aside></aside>
      </main>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zoomclasses" element={<Zoomclass />} />
        <Route path="/test" element={<Test />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/authentication" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
