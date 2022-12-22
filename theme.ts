import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#757575',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          marginBottom: '50px',
          marginTop: '-10px',
          backgroundColor: '#fafafa',
          // padding: '30px 0 0 0',
          width: 'clamp(520px, 100%, 760px)',
        },
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { boxShadow: 'none' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '20px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px !important',
          textTransform: 'inherit',
          fontSize: 16,
          transition: 'none',

          ':hover': {
            boxShadow: 'inset 0em 4em rgba(0, 0, 0, 0.03) !important',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})
