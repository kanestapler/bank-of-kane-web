import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Typography, TextField, MenuItem, Button,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Database, { useUser, useBankNote } from './database'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const VARIANT = 'outlined'

const EditNote = ({ match, classes, history }) => {
  const { noteId } = match.params
  console.log('Edit Note')
  const user = useUser()
  const [note, setNote] = useBankNote(noteId)
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
  if (!note) {
    return null
  }
  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={note.name}
          onChange={(event) => {
            setNote({
              ...note,
              name: event.target.value,
            })
          }}
          margin="normal"
          variant={VARIANT}
        />
        <TextField
          id="amount"
          label="Amount"
          type="number"
          className={classes.textField}
          value={note.amount}
          onChange={(event) => {
            setNote({
              ...note,
              amount: Number(event.target.value),
            })
          }}
          margin="normal"
          variant={VARIANT}
        />
        <TextField
          id="description"
          label="Description"
          className={classes.textField}
          value={note.reason}
          onChange={(event) => {
            setNote({
              ...note,
              reason: event.target.value,
            })
          }}
          margin="normal"
          variant={VARIANT}
        />
        <TextField
          id="completed"
          select
          label="Completed"
          className={classes.textField}
          value={note.paid}
          onChange={(event) => {
            setNote({
              ...note,
              paid: event.target.value,
            })
          }}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant={VARIANT}
        >
          <MenuItem value>
            Yes
          </MenuItem>
          <MenuItem value={false}>
            No
          </MenuItem>
        </TextField>
      </form>
      <div>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => {
            history.goBack()
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            Database.saveNote(noteId, note).then(() => {
              history.goBack()
            })
          }}
        >
          Save
        </Button>
      </div>
    </>
  )
}

export default withRouter(withStyles(styles)(EditNote))
