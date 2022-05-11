import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
  color: "#232129",
  backgroundColor: "#f6f6f6",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

type LayoutProps = {
  pageTitle: string,
  children: JSX.Element
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main style={pageStyles}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout