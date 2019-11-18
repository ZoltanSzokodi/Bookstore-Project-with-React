import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo-container">
        <img src="https://img.icons8.com/clouds/100/000000/book.png" className="Navbar-logo_logo" />
        <div className="Navbar-logo_name">Librify</div>
      </div>
      <div className="Navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <a href="#">Shopping Cart</a>
      </div>
    </div>
  )
}

export default Navbar;
