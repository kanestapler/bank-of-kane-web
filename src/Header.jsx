import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  console.log('Header')
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
