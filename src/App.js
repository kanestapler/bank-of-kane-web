import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Outstanding from './Outstanding';
import Admin from './Admin'
import Auth from './Auth';
import firebase from './Firebase';

class App extends Component {

    constructor() {
        super();
        this.state = {
            signedIn: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(((user) => {
            this.setState({
                signedIn: true
            });
        }));
    }

    render() {
        let userLink;
        if (!this.state.signedIn) {
            userLink = (<Link className="nav-link" to="/signin">Sign in</Link>);
        }

        return (
            <div className="App">
                <nav>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/admin">Admin</Link>
                    {userLink}
                </nav>
                <div>
                    <Route exact path="/" component={Outstanding} />
                </div>
                <div>
                    <Route path="/admin" component={Admin} />
                </div>
                <div>
                    <Route path="/signin" component={Auth} />
                </div>
            </div>
        );
    }
}

export default App;
