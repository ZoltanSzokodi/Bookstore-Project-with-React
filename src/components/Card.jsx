import React from 'react'
import '../styles/Card.css'
import unlikeMe from '../img/unlikeMeD.png'
import likeMe from '../img/likeMe.png'

function Card(props) {

  const { onClick, book } = props;
  const { cover, title, price, isFavorite } = props.book;

  return (
    // -------------------------- FRONT OF CARD -----------------------------
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cover} alt={title} />
        </div>

        {/* -------------------------- BACK OF CARD ----------------------------- */}
        {/* Note: I am using a class component so I can bind "this" and "idx" to the onClick function */}
        {/* Note: Otherwise with a function component I would have to use an arrow function */}

        <div className="flip-card-back">
          <button className="flip-card-back-favbtn" onClick={() => onClick(book)}>
            {isFavorite ? <img src={likeMe} alt="like-btn" /> : <img src={unlikeMe} alt="unlike-btn" />}
          </button>
          <h2>{title}</h2>
          <h2>{price}</h2>
          <a className="flip-card-back-btn"
            href={cover}
            data-fancybox="images"
            data-caption={title}>
            More Info
              </a>
        </div>
      </div>
    </div>
  )
}


export default Card;