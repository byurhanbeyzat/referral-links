import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/app.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Referral Links</title>
        <meta name="title" content="Referral Roulette" />
      </Head>
      <main role="main" style={{ paddingTop: '10rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
