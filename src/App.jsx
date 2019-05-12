import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'

import './App.css'

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
  </Router>
)

export default App
