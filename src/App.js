import React, { Component } from 'react'
import ContentWrapper from './components/ContentWrapper'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksContainer from './components/CardsContainer'
import Footer from './components/Footer'
import axios from 'axios'
import './styles/App.css'

class App extends Component {
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

    if (!isLoaded) {
      return (
        <ContentWrapper>
          <div className="Loader">Loading...</div>
        </ContentWrapper>
      )
    } else {
      return (
        <ContentWrapper>
          <Navbar />
          <Hero />
          <BooksContainer books={books} />
          <Footer />
        </ContentWrapper>
      )
    }
  }
}

export default App;
