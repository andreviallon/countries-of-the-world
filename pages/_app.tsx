import React, { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
			<Component {...pageProps} />
		</Layout>
      </ThemeProvider>
  )
}

export default MyApp
