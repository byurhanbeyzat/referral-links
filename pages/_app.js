import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import Layout from '../components/layout'

import '../styles/app.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
