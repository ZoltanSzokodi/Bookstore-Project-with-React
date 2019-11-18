import React, { Component } from 'react'
import BooksContainer from './components/CardsContainer'
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
      return <div>Loading...</div>
    } else {
      return <BooksContainer books={this.state.books} />
    }
  }
}

export default App;
