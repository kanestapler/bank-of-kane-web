import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Firebase from './firebase'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
}

const Header = ({ history, classes }) => {
  console.log('Header')
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)
  useEffect(() => {
    Firebase.auth().onAuthStateChanged(
      (x) => {
        setUser(x)
      },
    )
  }, [])

  const closeMenu = () => {
    setOpen(false)
    setMenuAnchor(null)
  }

  const getLoginButton = () => {
    if (user) {
      return (
        <>
          <IconButton
            onClick={(event) => {
              setOpen(true)
              setMenuAnchor(event.currentTarget)
            }}
            color="inherit"
          >
            <Avatar alt="Profile" src={user.photoURL} className={classes.avatar} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>My account</MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu()
                Firebase.auth().signOut()
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </>
      )
    }
    return (
      <Button
        onClick={() => {
          history.push('/signin')
        }}
      >
        Login
      </Button>
    )
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.grow}>
          <Button onClick={() => { history.push('/') }}>
            <Typography variant="h6">
            Bank of Kane
            </Typography>
          </Button>
        </div>
        <div>
          {getLoginButton()}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(withStyles(styles)(Header))
