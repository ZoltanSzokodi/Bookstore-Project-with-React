import React from 'react'
import Home from './components/Home'
import About from './components/About'
import ShoppingCart from './components/ShoppingCart'
import ContentWrapper from './components/ContentWrapper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <Router>
      <ContentWrapper>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shopping" exact component={ShoppingCart} />
        </Switch>
        <Footer />
      </ContentWrapper>
    </Router>
  )
}



export default App;
