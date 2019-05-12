import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core'

const Header = ({ history }) => {
  console.log('Header')
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={() => { history.push('/') }}>
          <Typography variant="h6">
            Bank of Kane
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header)
