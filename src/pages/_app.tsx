/* eslint-disable  */
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'styles/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const teste = {
  salve: 'vaga',

  teste: 'teste'
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <NextNprogress
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </CacheProvider>
  )
}
