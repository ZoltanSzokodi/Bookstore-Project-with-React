import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import FavouritesLogo from '../img/favourites.png'

function Navbar({ favCount }) {

  return (
    <nav className="Navbar-scroll">
      <div className="Navbar-logo-container">
        <img src="https://img.icons8.com/clouds/100/000000/book.png" className="Navbar-logo_logo" alt="librify-logo" />
        <div className="Navbar-logo_name">Librify</div>
      </div>
      <div className="Navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="#">Contact</Link>
        <Link to="/favourites">
          <div className="Navbar-links-container-favorites">
            <img
              src={FavouritesLogo}
              alt="favourites"
              className="Navbar-links-container-favorites_logo" />
            <span className="Navbar-links-container-favorites_favcount">{favCount}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}


export default Navbar;
