import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { useBankNotes } from './database'

import Note from './Note'
import BottomNav from './BottomNav'

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  mainBody: {
    paddingBottom: '7em',
  },
}

const Home = ({ classes }) => {
  const [currentTab, setCurrentTab] = useState(0)
  const bankNotes = useBankNotes()

  const getNotes = () => {
    const filteredNotes = bankNotes.filter((note) => {
      if (currentTab === 0 && !note.paid) {
        return note
      }
      if (currentTab === 1 && note.paid) {
        return note
      }
      return null
    })
    const notes = filteredNotes.map(note => (
      <Note key={note.id} note={note} />
    ))
    const total = filteredNotes.reduce((acc, note) => acc + note.amount, 0)
    notes.push((
      <Note
        key="total"
        note={{
          name: 'Total',
          amount: total,
          reason: '',
          paid: true,
          total,
        }}
      />
    ))
    return notes
  }

  return (
    <div className={classes.mainBody}>
      <div className={classes.main}>
        {getNotes()}
      </div>
      <BottomNav onChange={(tab) => { setCurrentTab(tab) }} />
    </div>
  )
}

export default withStyles(styles)(Home)
