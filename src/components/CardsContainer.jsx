import React from 'react'
import Card from './Card'
import '../styles/CardsContainer.css'

function CardsContainer(props) {
  return (
    <div className="CardsContainer">
      {props.books.map(book => (
        <Card
          key={book.title}
          book={book}
          onClick={props.onClick}
        />
      ))}
    </div>
  )
}


export default CardsContainer
