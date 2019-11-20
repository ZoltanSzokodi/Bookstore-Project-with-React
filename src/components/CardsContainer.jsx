import React from 'react'
import Card from './Card'
import '../styles/CardsContainer.css'

function CardsContainer({ books, onClick }) {
  return (
    <div className="CardsContainer">
      {books.map(book => (
        <Card
          key={book.title}
          book={book}
          onClick={onClick}
        />
      ))}
    </div>
  )
}


export default CardsContainer
