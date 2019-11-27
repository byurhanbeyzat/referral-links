import React from 'react'

import SEO from './seo'
import Header from './header'

const Layout = ({ title, children }) => (
  <>
    <SEO title={title} />
    <Header />
    <main role="main" style={{ paddingTop: '2.5rem' }}>
      {children}
    </main>
  </>
)

export default Layout
