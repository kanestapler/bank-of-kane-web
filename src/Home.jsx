import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Database from './database'

import Note from './Note'

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}

const Home = ({ classes }) => {
  console.log('Home')
  const bankNotes = Database.useBankNotes()
  const Notes = bankNotes.map(note => (
    <Note key={note.name} note={note} />
  ))
  return (
    <div className={classes.main}>
      {Notes}
    </div>
  )
}

export default withStyles(styles)(Home)
