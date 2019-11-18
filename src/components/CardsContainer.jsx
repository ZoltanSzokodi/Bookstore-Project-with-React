import React from 'react'
import Card from './Card'
import '../styles/CardsContainer.css'

function CardsContainer({ books }) {
  return (
    <div className="CardsContainer">
      {books.map(book => (
        <Card key={book.title} book={book} />
      ))}
    </div>
  )
}


export default CardsContainer
