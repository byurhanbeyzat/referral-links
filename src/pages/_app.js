import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/app.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Referral Roulette</title>
          <meta name="title" content="Referral Roulette" />
        </Head>
        <main role="main" style={{ paddingTop: '10rem' }}>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}
