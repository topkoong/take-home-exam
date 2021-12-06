import * as React from 'react'

import { CacheProvider, EmotionCache } from '@emotion/react'

import { AppProps } from 'next/app'
import { AppWrapper } from '../src/context/SharedContext'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Theerut Foongkiatcharoen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  )
}
