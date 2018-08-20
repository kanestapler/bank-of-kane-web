import firebase from './Firebase';

export function getUser() {
    console.log(firebase.auth().currentUser);
    return firebase.auth().currentUser;
}