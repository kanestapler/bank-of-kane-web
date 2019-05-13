import { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const useBankNotes = () => {
  const [bankNotes, setBankNotes] = useState([])
  useEffect(() => {
    db.collection('notes').onSnapshot((doc) => {
      setBankNotes(doc.docs.map(note => note.data()))
    })
  }, [])
  return bankNotes
}

export default {
  useBankNotes,
}
