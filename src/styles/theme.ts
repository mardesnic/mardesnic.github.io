import { createTheme } from '@mui/material/styles';

const primary = '#333';
const secondary = '#ccc';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: 'Monospace, Courier, sans-serif',
    body1: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 16,
      opacity: 0.6,
    },
    h1: {
      fontSize: 22,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: 'none',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: primary,
        },
      },
    },
  },
});
