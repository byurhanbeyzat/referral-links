import React from 'react'

import SEO from './seo'

const Layout = ({ title, children }) => (
  <>
    <SEO title={title} />
    <main role="main" style={{ paddingTop: '10rem' }}>
      {children}
    </main>
  </>
)

export default Layout
