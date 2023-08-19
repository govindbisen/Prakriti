import React from 'react'
import {  Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/ContactUs";
import Zoomclass from "../Pages/Zoomclass";
import Test from "../Pages/Test";
import AuthPage from '../Pages/AuthPage';
import Donate from "../Pages/Donate";
import Register from '../Pages/Register';
import LoginForm from "../Pages/Login"

function NavRoute() {
    const routes = [
        { path: '/about', element: <About /> },
        { path: '/', element: <Home /> },
        { path: '/blog', element: <Blog /> },
        { path: '/zoomclasses', element: <Zoomclass /> },
        { path: '/test', element: <Test /> },
        { path: '/contact', element: <Contact /> },
        { path: '/donate', element: <Donate /> },
        { path: '/authentication', element: <AuthPage /> },
      ];
  return (
    <>
    <Routes>
    {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/authentication" element={<AuthPage />}>
         <Route path="signup" element={<Register />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
    
    </>
  )
}

export default NavRoute