import React from 'react'
import {
  Paper, Table, TableBody,
  TableCell, TableHead, TableRow,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  link: {
    color: 'white',
  },
})

const NotesTable = ({ notes, classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Edit Note</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {notes.map(note => (
          <TableRow key={`${note.name}${note.reason}`}>
            <TableCell>
              {note.name}
            </TableCell>
            <TableCell>
              {note.amount}
            </TableCell>
            <TableCell>
              {note.paid ? 'Yes' : 'No'}
            </TableCell>
            <TableCell>
              {note.reason}
            </TableCell>
            <TableCell>
              <Link className={classes.link} to={`/edit/${note.id}`}>Edit</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

NotesTable.defaultProps = {
  notes: [],
}

export default withStyles(styles)(NotesTable)
