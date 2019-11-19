import React from 'react'
import Loader from './Loader'
import Hero from './Hero'
import CardsContainer from './CardsContainer'

// Note: Destructuring the props inside the arguments

function Home({ books, onClick, isLoaded }) {
  const loading = <Loader />;
  const loaded = (
    <React.Fragment >
      <Hero />
      <CardsContainer books={books} onClick={onClick} />
    </React.Fragment >)

  return !isLoaded ? loading : loaded
}

export default Home;
