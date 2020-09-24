import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/nav'
import HomeContainer from './containers/home'
import WhyContainer from './containers/why'
import TestContainer from './containers/test'
import Footer from './components/footer'
import './App.scss'

function App() {
  return (
    <div>
      {/* <script src="./components/html/js/webflow" /> */}
      <Router>
        <Navbar />

        <Switch>
          <Route
            name="Why"
            path="/why"
            key="why"
            component={WhyContainer}
            exact
          />
          <Route
            name="Test"
            key="test"
            path={['/test:cardId', '/test']}
            component={TestContainer}
          />
          <Route
            name="Home"
            key="home"
            path={['/:cardId', '/']}
            component={HomeContainer}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
