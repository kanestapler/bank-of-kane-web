import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

console.log('Not in loop')
if (!firebase.apps.length) {
  console.log('In the loop')
  firebase.initializeApp(firebaseConfig)
}

export default firebase
