import React from 'react'
import Head from 'next/head'

const SEO = ({ title }) => {
  const siteTitle = title
    ? `${title} | 'Referral Roulette'`
    : 'Referral Roulette'

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
    </Head>
  )
}

export default SEO
