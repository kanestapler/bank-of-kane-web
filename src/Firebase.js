import firebase from 'firebase/app';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyBZg0gTnAxnqaV03jqiJvxPXYyVQb9yEtw",
    authDomain: "bank-of-kane.firebaseapp.com",
    databaseURL: "https://bank-of-kane.firebaseio.com",
    projectId: "bank-of-kane",
    storageBucket: "bank-of-kane.appspot.com",
    messagingSenderId: "1080191580860"
  };
firebase.initializeApp(config);
export default firebase;