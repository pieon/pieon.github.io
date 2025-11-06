import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0095eb',
    },
    text: {
      primary: 'rgba(0,0,0,0.8)',
      secondary: '#7a7a7a',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '2.25rem',
      fontWeight: 400,
      lineHeight: 1.25,
      color: '#313131',
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.25,
      color: '#313131',
      marginTop: '1rem',
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.25,
      color: '#313131',
      marginTop: '1.5rem',
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.25,
      color: '#313131',
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.25,
      color: '#313131',
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.25,
      color: 'rgba(0,0,0,0.54)',
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.65,
      color: 'rgba(0,0,0,0.8)',
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '0.9rem',
      lineHeight: 1.65,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Roboto', sans-serif",
          fontSize: '16px',
          color: 'rgba(0,0,0,0.8)',
          lineHeight: 1.65,
        },
        '@media screen and (min-width: 58em)': {
          html: {
            fontSize: '20px',
          },
        },
        a: {
          color: '#0095eb',
          textDecoration: 'none',
          transition: 'color 0.6s ease',
          '&:hover': {
            color: '#0095eb',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        outlined: {
          borderColor: '#0095eb',
          color: '#0095eb',
          '&:hover': {
            borderColor: '#0095eb',
            backgroundColor: 'rgba(0, 149, 235, 0.04)',
          },
        },
      },
    },
  },
});

export default theme;
