import React from 'react'
// import logo from "./assets/prakriti.jpeg";
import logo from "../assets/prakriti.jpeg"
import { Link } from 'react-router-dom'
import useAuth from '../CustomHook/useAuth';

function Navbar() {

  const isAuthenticated = useAuth();

    const navigationLinks = isAuthenticated ? [
        { to: '/about', text: 'About' },
        { to: '/', text: 'Home' },
        { to: '/blog', text: 'Blog' },
        { to: '/zoomclasses', text: 'Zoom Classes' },
        { to: '/test', text: 'Test' },
        { to: '/contact', text: 'Contact' },
        { to: '/donate', text: 'Donate' },
      
      ]:[  { to: '/authentication', text: 'Login/SignUP' },];


  return (
    <nav>
    <div className="logo-head">
      <img src={logo} className="logo" alt="LOGO" />
      <p> Prakriti MPPSC </p>
    </div>
    <div>
    <ul>
      {navigationLinks.map((link) => (
        <li key={link.to}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
    </div>
    </nav>
  )
}

export default Navbar