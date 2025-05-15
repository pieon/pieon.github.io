import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    h3: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    h4: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    h5: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    h6: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    body1: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Helvetica, Arial, sans-serif',
        },
      },
    },
  },
});

export default theme; 