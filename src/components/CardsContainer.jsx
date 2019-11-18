import React, { Component } from 'react'
import Card from './Card'
import '../styles/CardsContainer.css'

class CardsContainer extends Component {
  render() {
    return (
      <div className="CardsContainer">
        {this.props.books.map(book => (
          <Card key={book.title} book={book} />
        ))}
      </div>
    )
  }
}

export default CardsContainer
