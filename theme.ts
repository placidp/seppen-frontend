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
          marginBottom: '30px',
          backgroundColor: '#fafafa',
          padding: '20px 0 0 0',
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
