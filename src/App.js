import React, { Component } from 'react';
import './App.css';
import Outstanding from './Outstanding';
import Admin from './Admin'
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/admin">Admin</Link>
        </nav>
        <div>
          <Route exact path="/" component={Outstanding} />
        </div>
        <div>
          <Route path="/admin" component={Admin} />
        </div>
      </div>
    );
  }
}

export default App;
