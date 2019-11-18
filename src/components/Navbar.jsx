import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo-container">
        <img src="https://img.icons8.com/clouds/100/000000/book.png" className="Navbar-logo_logo" />
        <div className="Navbar-logo_name">Librify</div>
      </div>
      <div className="Navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="#">Contact</Link>
        <Link to="/shopping">Shopping Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar;
