import Head from 'next/head'
import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'
import { Header } from '../components/Header'

import { theme } from '../theme'
import { ThemeProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'

import '../styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Seppen</title>
        <link rel='icon' href='/snowflake.jpg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
