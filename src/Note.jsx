import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: '30em',
    },
    minHeight: '10em',
    marginTop: '2em',
  },
})

const currencyFormat = num => `$${num.toFixed(2)}`

const Note = ({ note, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4">
        {note.name}
      </Typography>
      <Typography variant="body1">
        {currencyFormat(note.amount)}
      </Typography>
      <Typography color="textSecondary">
        {note.reason}
      </Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(Note)
