import React, { Component } from 'react'
import '../styles/Card.css'

class Card extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={this.props.book.cover} alt={this.props.book.title} />
          </div>
          <div className="flip-card-back">
            <a href={this.props.book.cover} data-fancybox="images" data-caption={this.props.book.title}>
              click me
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;