import { useState, useEffect } from 'react'
import firebase from './firebase'

const db = firebase.firestore()

export const useBankNotes = () => {
  const [bankNotes, setBankNotes] = useState([])
  useEffect(() => {
    const unsubscribe = db.collection('notes').onSnapshot((doc) => {
      setBankNotes(doc.docs.map(note => ({
        ...note.data(),
        id: note.id,
      })))
    })
    return unsubscribe
  }, [])
  return bankNotes
}

export const useBankNote = (noteId) => {
  const [note, setNote] = useState(null)
  useEffect(() => {
    const unsubscribe = db.collection('notes').doc(noteId).onSnapshot((doc) => {
      setNote(doc.data())
    })
    return unsubscribe
  }, [noteId])
  return [note, setNote]
}

const isAdmin = userId => new Promise((resolve, reject) => {
  db.collection('users').where('userId', '==', userId).get()
    .then((querySnapshot) => {
      resolve(querySnapshot.docs[0].data().admin)
    })
    .catch((error) => {
      reject(error)
    })
})

export const useUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (userData) => {
        isAdmin(userData.uid).then((admin) => {
          setUser({
            ...userData,
            admin,
          })
        })
      },
    )
    return unsubscribe
  }, [])
  return user
}

const userExists = userId => new Promise((resolve, reject) => {
  db.collection('users').where('userId', '==', userId).get()
    .then((querySnapshot) => {
      resolve(querySnapshot.docs.length > 0)
    })
    .catch((error) => {
      reject(error)
    })
})

const createUser = (userId, name) => db.collection('users').add({
  userId,
  admin: false,
  name,
})

const saveNote = (noteId, note) => db.collection('notes').doc(noteId).set(note)

export default {
  userExists,
  createUser,
  saveNote,
}
