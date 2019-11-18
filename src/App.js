import React, { Component } from 'react'
import axios from 'axios'


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
      return <div>hello world</div>
    }
  }
}

export default App;
