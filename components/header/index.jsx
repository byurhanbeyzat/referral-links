import React from 'react'
import Link from 'next/link'

import './styles.scss'

const LinkItem = ({ path, className, children }) => (
  <Link href={path}>
    <a className={className ? `${className}` : 'link'}>{children}</a>
  </Link>
)

const Header = () => (
  <header className="header">
    <LinkItem path="/" className="logo">
      RR
    </LinkItem>
    <nav className="nav">
      <LinkItem path="/">Home</LinkItem>
      <LinkItem path="/about">About</LinkItem>
    </nav>
  </header>
)

export default Header
