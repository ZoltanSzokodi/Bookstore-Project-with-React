import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import FavoritesLogo from '../img/favorites.png'
import ShoppingLogo from '../img/shopping.png'

function Navbar({ favCount, books }) {

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

        <div className="dropdown">
          <Link to="/favorites">
            <div className="Navbar-links-container-favorites">
              <img
                src={FavoritesLogo}
                alt="favorites"
                className="Navbar-links-container-favorites_logo" />
              <span className="Navbar-links-container-favorites_favcount">{favCount}</span>
            </div>
          </Link>
          <ul className="dropdown-content">
            {books.map(book => (
              book.isFavorite && (
                <li key={book.title} className="dropdown-content_li">
                  {book.title}
                  <button className="dropdown-content_btn">add to cart</button>
                </li>
              )
            ))}
          </ul>
        </div>

        <Link to="#">
          <div className="Navbar-links-container-shopping">
            <img
              src={ShoppingLogo}
              alt="shopping"
              className="Navbar-links-container-shopping_logo" />
            <span className="Navbar-links-container-shopping_shopcount">5</span>
          </div>
        </Link>

      </div>
    </nav>
  )
}


export default Navbar;
