import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as firebase from 'firebase/app'

import { firebaseConfig } from './firebaseConfig'
import theme from './Theme'
import Header from './Header'
import Home from './Home'
import Admin from './Admin'

import './App.css'

firebase.initializeApp(firebaseConfig)

const App = () => (
  <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
      </Router>
    </MuiThemeProvider>
  </>
)

export default App
