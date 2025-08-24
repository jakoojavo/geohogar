import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Dorado principal
      light: '#F4E4BC', // Dorado claro
      dark: '#B8860B', // Dorado oscuro
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B4513', // Marrón dorado
      light: '#CD853F', // Marrón claro
      dark: '#654321', // Marrón oscuro
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5DC', // Beige claro
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#666666',
    },
    success: {
      main: '#4CAF50',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2C2C2C',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2C2C2C',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#2C2C2C',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2C2C2C',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2C2C2C',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#2C2C2C',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

