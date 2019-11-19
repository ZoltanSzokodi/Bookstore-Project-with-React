import React from 'react'
import '../styles/Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={this.props.book.cover} alt={this.props.book.title} />
          </div>
          <div className="flip-card-back">
            <button className="flip-card-back-favbtn" onClick={this.props.onClick.bind(this, this.props.idx)}>
              {this.props.book.isFavorite ? "O" : "X"}
            </button>
            <h2>{this.props.book.title}</h2>
            <a className="flip-card-back-btn"
              href={this.props.book.cover}
              data-fancybox="images"
              data-caption={this.props.book.title}>
              More Info
              </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;