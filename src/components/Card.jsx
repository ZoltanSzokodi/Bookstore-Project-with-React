import React from 'react'
import '../styles/Card.css'
import unlikeMe from '../img/unlikeMeD.png'
import likeMe from '../img/likeMe.png'

class Card extends React.Component {
  toggleHeart(state) {
    if (state) return "heart-like"
    return "heart-unlike"
  }
  render() {

    const { cover, title, isFavorite } = this.props.book;
    const { onClick, idx } = this.props;

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
            <button className="flip-card-back-favbtn" onClick={onClick.bind(this, idx)}>
              {isFavorite ? <img src={likeMe} alt="like-btn" /> : <img src={unlikeMe} alt="unlike-btn" />}
            </button>
            {/* <div className={isFavorite ? "heart-like" : "heart-unlike"} onClick={onClick.bind(this, idx)}></div> */}
            <h2>{title}</h2>
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
}

export default Card;