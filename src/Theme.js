import { createMuiTheme } from '@material-ui/core/styles'
import { teal, pink } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
})
