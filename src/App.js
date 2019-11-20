import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import Favorites from './components/Favorites'
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
      favCount: 0,
      shopCount: 0,
      shoppingList: []
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
      // console.log(this.state);
    } catch (err) {
      console.log(err)
    }
  }

  // -------------------------- TOGGLE isFavorite STATE --------------------------------

  toggleFavorite = book => {
    // console.log(book);
    let favCount = 0;
    let books = this.state.books.slice();
    book.isFavorite = !book.isFavorite
    books.forEach(book => book.isFavorite && favCount++)
    this.setState({
      books,
      favCount
    })
  }

  addToShoppingList = book => {
    // console.log(book);
    let shopCount = 0;
    let shoppingList = this.state.shoppingList.slice();
    shoppingList.push(book);
    shoppingList.forEach(() => shopCount++)
    this.setState({
      shoppingList,
      shopCount
    })
  }

  // -------------------------- RENDER <Loader /> or <Home /> -----------------------------

  render() {
    const { isLoaded, books, favCount, shopCount } = this.state;

    return (
      <Router>
        <ContentWrapper>
          <Navbar
            onClick={this.addToShoppingList}
            favCount={favCount}
            books={books}
            shopCount={shopCount} />
          <Switch>

            {/* Note: I am using "render={fn...}" instead of "component={comp}" so that I am able to pass down props within the Routes */}

            <Route path="/" exact render={(props) => <Home {...props} isLoaded={isLoaded} books={books} onClick={this.toggleFavorite} />} />
            <Route path="/about" exact render={(props) => <About {...props} />} />
            <Route path="/favorites" exact render={(props) => <Favorites {...props} />} />
          </Switch>
          <Footer />
        </ContentWrapper>
      </Router >
    )
  }
}





export default App;
