import { useState } from "react";

import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/ContactUs";
import Zoomclass from "./Pages/Zoomclass";
import Test from "./Pages/Test";
import LoginSignup from "./Pages/LoginSignup";
import Donate from "./Pages/Donate";

import {  Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";


function App() {
  const routes = [
    { path: '/about', element: <About /> },
    { path: '/', element: <Home /> },
    { path: '/blog', element: <Blog /> },
    { path: '/zoomclasses', element: <Zoomclass /> },
    { path: '/test', element: <Test /> },
    { path: '/contact', element: <Contact /> },
    { path: '/donate', element: <Donate /> },
    { path: '/authentication', element: <LoginSignup /> },
  ];

  return (
    <>
      <Navbar/>
      <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      </Routes>
    </>
  );
}

export default App;
