import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import Favourites from './components/Favourites'
import ContentWrapper from './components/ContentWrapper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoaded: false,
      favCount: 0
    };
  }

  // -------------------------- FETCH DATA and INIT STATE -----------------------------

  componentDidMount = async () => {
    let books = []
    try {
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
    } catch (err) {
      console.log(err)
    }
  }

  // -------------------------- TOGGLE isFavorite STATE --------------------------------

  toggleFavorite = index => {
    // console.log(index);
    let favCount = 0;
    let books = this.state.books.slice();
    books[index].isFavorite = !books[index].isFavorite
    books.forEach(book => book.isFavorite && favCount++)
    this.setState({
      books,
      favCount
    })
  }

  // -------------------------- RENDER <Loader /> or <Home /> -----------------------------

  render() {
    const { isLoaded, books, favCount } = this.state;

    return (
      <Router>
        <ContentWrapper>
          <Navbar favCount={favCount} />
          <Switch>

            {/* Note: I am using "render={fn...}" instead of "component={comp}" so that I am able to pass down props within the Routes */}

            <Route path="/" exact render={(props) => <Home {...props} isLoaded={isLoaded} books={books} onClick={this.toggleFavorite} />} />
            <Route path="/about" exact render={(props) => <About {...props} />} />
            <Route path="/favourites" exact render={(props) => <Favourites {...props} />} />
          </Switch>
          <Footer />
        </ContentWrapper>
      </Router >
    )
  }
}





export default App;
