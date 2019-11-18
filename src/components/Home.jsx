import React, { Component } from 'react'
import ContentWrapper from './ContentWrapper'
import Hero from './Hero'
import BooksContainer from './CardsContainer'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get("https://api.myjson.com/bins/zyv02")
      .then(res => {
        this.setState({
          isLoaded: true,
          books: res.data.books
        })
      })
  }
  render() {
    const { isLoaded, books } = this.state;
    const loading = <div className="Loader">Loading...</div>;
    const loaded = (
      <React.Fragment >
        <Hero />
        <BooksContainer books={books} />
      </React.Fragment >)

    return !isLoaded ? loading : loaded
  }
}

export default Home;
