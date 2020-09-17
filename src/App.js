import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/nav'
import HomeContainer from './containers/home'
import WhyContainer from './containers/why'
import Footer from './components/footer'
import './App.scss'

function App() {
  return (
    <div>
      <script src="./components/html/js/webflow" />
      <Router>
        <Navbar />

        <Route name="Home" path="/" component={HomeContainer} />
        <Route name="Why" path="/why" component={WhyContainer} exact />
      </Router>
      <Footer />
    </div>
  )
}

export default App
