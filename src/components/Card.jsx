import React from 'react'
import '../styles/Card.css'

function Card({ book }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="flip-card-back">
          <h2>{book.title}</h2>
          <a className="flip-card-back-btn"
            href={book.cover}
            data-fancybox="images"
            data-caption={book.title}>
            More Info
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card;