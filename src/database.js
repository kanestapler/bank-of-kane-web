import { useState, useEffect } from 'react'
import firebase from './firebase'

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
