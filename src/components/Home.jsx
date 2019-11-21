import React from 'react'
import Loader from './Loader'
import Hero from './Hero'
import CardsContainer from './CardsContainer'
import Search from './Search'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    textAlign: "center",
    color: "white",
    transform: "translateY(-50%)",
    fontSize: "2.5rem"
  }
}

function Home({ books, onClick, isLoaded, onChange, classes }) {
  const loading = <Loader />;
  const loaded = (
    <React.Fragment >
      <Hero />
      <Search onChange={onChange} />
      <h2 className={classes.title}>number of books displayed: {books.length}</h2>
      <CardsContainer books={books} onClick={onClick} />
    </React.Fragment >)

  return !isLoaded ? loading : loaded
}

export default withStyles(styles)(Home);
