import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Lato', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#EF3340',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
