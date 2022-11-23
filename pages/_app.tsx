import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { theme } from '../theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
