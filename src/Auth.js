import React, { Component } from 'react';
import './Auth.css';
import firebaseui from 'firebaseui';
import firebase from './Firebase';

const authConfig = {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/',
    signInFlow: 'popup'
};
const ui = new firebaseui.auth.AuthUI(firebase.auth());

class Auth extends Component {

    componentDidMount() {
        ui.start('#firebase-ui-auth', authConfig);
    }

    render() {
        return (
            <div id='firebase-ui-auth'>
                Please Sign In
            </div>
        );
    }
}

export default Auth;