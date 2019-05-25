import React from 'react'
import { Typography } from '@material-ui/core'

import { useUser, useBankNotes } from './database'
import NotesTable from './NotesTable'

const Admin = () => {
  const user = useUser()
  const notes = useBankNotes()
  if (!user) {
    return null
  }
  if (!user.admin) {
    return (
      <div>
        <Typography>
          You are not an admin
        </Typography>
      </div>
    )
  }
  return (
    <div>
      <NotesTable notes={notes} />
    </div>
  )
}

export default Admin
