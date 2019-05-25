import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import Firebase from './firebase'
import Database from './database'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  parent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15em',
  },
})

const SignedIn = ({ classes, history }) => {
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Database.userExists(user.uid).then((exists) => {
          if (!exists) {
            Database.createUser(user.uid, user.displayName).then((x) => {
              history.push('/')
            })
          } else {
            history.push('/')
          }
        })
      }
    })
  }, [history])

  return (
    <div className={classes.parent}>
      <CircularProgress size={50} className={classes.progress} />
    </div>
  )
}

export default withRouter(withStyles(styles)(SignedIn))
