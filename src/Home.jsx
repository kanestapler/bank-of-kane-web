import React from 'react'
import { Typography } from '@material-ui/core'

import Database from './database'

import Note from './Note'


const Home = () => {
  console.log('Home')
  const bankNotes = Database.useBankNotes()
  const Notes = bankNotes.map(note => (
    <Note key={note.name} note={note} />
  ))
  return (
    <div>
      {Notes}
    </div>
  )
}

export default Home
