import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { uuid } from 'uuidv4'
import Home from './components/Home'
import Checkout from './components/Checkout'
import ContentWrapper from './components/ContentWrapper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoaded: false,
      favCount: 0,
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
            let randomPrice = (Math.floor(Math.random() * (20 - 10 + 1)) + 9.99).toFixed(2);
            books.push({ ...book, isFavorite: false, price: `$${randomPrice}` })
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

  removeFromShoppingList = id => {
    // console.log(id);
    this.setState({
      shoppingList: [...this.state.shoppingList.filter(item => item.id !== id)]
    })
  }

  addToShoppingList = book => {
    // console.log(book);
    let shoppingList = this.state.shoppingList.slice();
    shoppingList.push({ ...book, id: uuid() });

    this.setState({ shoppingList })
  }

  // -------------------------- RENDER <Loader /> or <Home /> -----------------------------

  render() {
    const { isLoaded, books, favCount, shoppingList } = this.state;

    return (
      <Router>
        <ContentWrapper>
          <Navbar
            onClick={this.addToShoppingList}
            favCount={favCount}
            books={books}
            shoppingList={shoppingList}
          />
          <Switch>

            {/* Note: I am using "render={fn...}" instead of "component={comp}" so that I am able to pass down props within the Routes */}

            <Route path="/" exact render={(props) => <Home {...props} isLoaded={isLoaded} books={books} onClick={this.toggleFavorite} />} />

            <Route path="/checkout" exact render={(props) => <Checkout {...props} shoppingList={shoppingList} onDelete={this.removeFromShoppingList} />} />
          </Switch>
          <Footer />
        </ContentWrapper>
      </Router >
    )
  }
}

export default App;
