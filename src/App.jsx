import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './Theme'
import Header from './Header'
import Home from './Home'
import Admin from './Admin'
import SignIn from './SignIn'
import SignedIn from './SignedIn'
import EditNote from './EditNote'

import './App.css'

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
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signed-in" exact component={SignedIn} />
        <Route path="/edit/:noteId" exact component={EditNote} />
      </Router>
    </MuiThemeProvider>
  </>
)

export default App
