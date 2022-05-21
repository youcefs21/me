import * as React from 'react'
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
import './layout.css'

const NavItem = ({to, children}: { to: string, children: string | JSX.Element }) => {
  return (
    <li className={"nav-link-item"}>
      <Link to={to} className={"nav-link-text"}>
        {children}
      </Link>
    </li>
  )
}

const NavBar = () => {
  return (
    <nav>
      <ul className={"nav-links"}>
        <NavItem to={"/"}>
          <div className="crop-img">
            <StaticImage
              src={"../images/myIcon.png"}
              alt={"Profile Picture"}
              width={42}
              height={42}
            />
          </div>
        </NavItem>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/about"}>About</NavItem>
      </ul>
    </nav>
  )
}


type LayoutProps = {
  pageTitle: string,
  children: JSX.Element
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={"container"}>
      <title>{pageTitle}</title>
      <NavBar/>
      <main style={{padding: 20}}>
        <h1 className={"heading"}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout