import React from 'react'
import { Link } from 'react-router-dom'
import FavoritesLogo from '../img/favorites.png'
import ShoppingLogo from '../img/shopping.png'
import UserLogo from '../img/user.png'
import '../styles/Navbar.css'

function Navbar({ favCount, books, onClick, shoppingList }) {

  return (
    <nav className="Navbar">
      <div className="Navbar-wrapper">

        <div className="Navbar-user-container">
          <img src={UserLogo} className="Navbar-logo_logo" alt="user-logo" />
        </div>

        <div className="Navbar-logo-container">
          <Link to="/" className="Navbar-logo_name">
            librify app
          </Link>

        </div>
        <div className="Navbar-links-container">

          {/* --------------------------- DROPDOWN FOR FAVORITES ------------------------------- */}

          <div className="dropdown">
            <div className="Navbar-links-container-favorites">
              <img
                src={FavoritesLogo}
                alt="favorites"
                className="Navbar-links-container-favorites_logo" />
              <span className="Navbar-links-container-favorites_favcount">{favCount}</span>
            </div>

            <ul className="dropdown-content">
              {books.map(book => (
                book.isFavorite && (
                  <li key={book.title} className="dropdown-content_li">
                    <div>{book.title}</div>
                    <button className="dropdown-content_btn" onClick={() => onClick(book)}>+</button>
                  </li>
                )
              ))}
            </ul>
          </div>

          {/* ------------------------ SHOPPING CART -------------------------- */}

          <Link to="/checkout">
            <div className="Navbar-links-container-shopping">
              <img
                src={ShoppingLogo}
                alt="shopping"
                className="Navbar-links-container-shopping_logo" />
              <span className="Navbar-links-container-shopping_shopcount">{shoppingList.length}</span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  )
}



export default Navbar;