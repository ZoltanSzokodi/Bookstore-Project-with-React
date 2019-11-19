import React, { Component } from 'react'
import Loader from './Loader'
import Hero from './Hero'
import CardsContainer from './CardsContainer'
// import axios from 'axios'

class Home extends Component {

  // -------------------------- RENDER <Loader /> or <Home /> -----------------------------

  render() {
    const loading = <Loader />;
    const loaded = (
      <React.Fragment >
        <Hero />
        <CardsContainer books={this.props.books} onClick={this.props.onClick} />
      </React.Fragment >)

    return !this.props.isLoaded ? loading : loaded
  }
}

export default Home;
