import React, { Component } from 'react'
import Loader from './Loader'
import Hero from './Hero'
import CardsContainer from './CardsContainer'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoaded: false
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  async componentDidMount() {
    let books = []
    await axios.get("https://api.myjson.com/bins/zyv02")
      .then(res => {
        res.data.books.forEach(book => {
          books.push({ ...book, isFavorite: false })
        })
      })
    this.setState({
      isLoaded: true,
      books
    })
    console.log(this.state);
  }

  toggleFavorite(index) {
    // console.log(index);
    let booksCopy = this.state.books.slice()
    booksCopy[index].isFavorite = !booksCopy[index].isFavorite
    this.setState({
      books: booksCopy
    })
  }

  render() {
    const { isLoaded, books } = this.state;
    const loading = <Loader />;
    const loaded = (
      <React.Fragment >
        <Hero />
        <CardsContainer books={books} onClick={this.toggleFavorite} />
      </React.Fragment >)

    return !isLoaded ? loading : loaded
  }
}

export default Home;
