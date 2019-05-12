import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as firebase from 'firebase/app'

import theme from './Theme'
import Header from './Header'
import Home from './Home'

import './App.css'

const firebaseConfig = {
  apiKey: 'AIzaSyBDYWKDcAJY6s1igG-KQogc2vQkCUxv3Z8',
  authDomain: 'bank-of-kane-49872.firebaseapp.com',
  databaseURL: 'https://bank-of-kane-49872.firebaseio.com',
  projectId: 'bank-of-kane-49872',
  storageBucket: 'bank-of-kane-49872.appspot.com',
  messagingSenderId: '246246539482',
  appId: '1:246246539482:web:2a377ef824607352',
}

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
      </Router>
    </MuiThemeProvider>
  </>
)

export default App
