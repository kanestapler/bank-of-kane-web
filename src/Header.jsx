import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Icon,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


import Firebase from './firebase'
import { useUser } from './database'

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
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Header = ({ history, classes }) => {
  const user = useUser()
  const [open, setOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)

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
            {
              user.admin ? (
                <MenuItem
                  onClick={() => {
                    closeMenu()
                    history.push('/admin')
                  }}
                >
                Admin
                </MenuItem>
              ) : null
            }
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
        <IconButton
          onClick={() => { history.push('/') }}
          color="inherit"
          className={classes.homeButton}
        >
          <Icon>home</Icon>
        </IconButton>

        <Typography variant="h6" className={classes.grow}>
            Bank of Kane
        </Typography>
        <div>
          {getLoginButton()}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(withStyles(styles)(Header))
