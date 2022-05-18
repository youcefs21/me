import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'
import { heading } from './layout.module.css'
import { navLinks } from './layout.module.css'
import { navLinkItem } from './layout.module.css'
import { navLinkText } from './layout.module.css'


type LayoutProps = {
  pageTitle: string,
  children: JSX.Element
}

const NavBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <NavBar/>
      <main style={{padding: 20}}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout