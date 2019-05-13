import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  BottomNavigation, BottomNavigationAction, Icon,
} from '@material-ui/core'

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}

const BottomNav = ({ classes, onChange }) => {
  console.log('BottomNav')
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <BottomNavigation
      value={currentTab}
      onChange={(event, value) => {
        setCurrentTab(value)
        onChange(value)
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Outstanding" icon={<Icon>assignment</Icon>} />
      <BottomNavigationAction label="Completed" icon={<Icon>assignment_turned_in</Icon>} />
    </BottomNavigation>
  )
}

export default withStyles(styles)(BottomNav)
