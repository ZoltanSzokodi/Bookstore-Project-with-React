import React, { Component } from 'react'
import Loader from './Loader'
import Hero from './Hero'
import CardsContainer from './CardsContainer'
import Search from './Search'

// Note: Destructuring the props inside the arguments

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filtered: []
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     filtered: this.props.books
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     filtered: nextProps.books
  //   });
  // }

  // handleChange = (e) => {
  //   // Variable to hold the original version of the list
  //   let currentList = [];
  //   // Variable to hold the filtered list before putting into state
  //   let newList = [];

  //   // If the search bar isn't empty
  //   if (e.target.value !== "") {
  //     // Assign the original list to currentList
  //     currentList = this.state.filtered;

  //     // Use .filter() to determine which items should be displayed
  //     // based on the search terms
  //     newList = currentList.filter(item => {
  //       // change current item to lowercase
  //       const lc = item.title.toLowerCase();
  //       // change search term to lowercase
  //       const filter = e.target.value.toLowerCase();
  //       // check to see if the current list item includes the search term
  //       // If it does, it will be added to newList. Using lowercase eliminates
  //       // issues with capitalization in search terms and search content
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     // If the search bar is empty, set newList to original task list
  //     newList = this.state.filtered;
  //   }
  //   // Set the filtered state based on what our rules added to newList
  //   this.setState({
  //     filtered: newList
  //   });
  // }

  render() {
    // console.log(this.state);

    const { books, onClick, isLoaded, onChange } = this.props;
    const loading = <Loader />;
    const loaded = (
      <React.Fragment >
        <Hero />
        <Search onChange={onChange} />
        <CardsContainer books={books} onClick={onClick} />
      </React.Fragment >)

    return !isLoaded ? loading : loaded
  }
}

export default Home;
