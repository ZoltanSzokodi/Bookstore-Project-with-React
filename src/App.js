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
      filtered: [],
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
        books,
        filtered: books
      })
      // console.log(this.state);
    } catch (err) {
      console.log(err)
    }
  }

  // -------------------------- TOGGLE isFavorite STATE --------------------------------

  toggleFavorite = book => {
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
    this.setState({
      shoppingList: [...this.state.shoppingList.filter(item => item.id !== id)]
    })
  }

  addToShoppingList = book => {
    let shoppingList = this.state.shoppingList.slice();
    shoppingList.push({ ...book, id: uuid() });

    this.setState({ shoppingList })
  }

  handleChange = (e) => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.filtered;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.filtered;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
    console.log(this.state.filtered);

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

            <Route path="/" exact render={(props) => <Home {...props} isLoaded={isLoaded} books={this.state.filtered} onClick={this.toggleFavorite} onChange={this.handleChange} />} />

            <Route path="/checkout" exact render={(props) => <Checkout {...props} shoppingList={shoppingList} onDelete={this.removeFromShoppingList} />} />
          </Switch>
          <Footer />
        </ContentWrapper>
      </Router >
    )
  }
}

export default App;
