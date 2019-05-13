import React from 'react'
import { Typography } from '@material-ui/core'


const Note = ({ note }) => (
  <div>
    <Typography>
        Name:
      {' '}
      {note.name}
      <br />
        Amount:
      {' '}
      {note.value}
    </Typography>
  </div>
)

export default Note
