import {Link} from "gatsby";
import * as React from "react";
import '../styles/navigation.css'

const NavItem = ({to, children}: { to: string, children: string | JSX.Element }) => {
  return (
    <li className={"nav-link-item"}>
      <a href={to} className={"nav-link-text main-text-color"}>
        {children}
      </a>
    </li>
  )
}

const NavBar = () => {
  return (
    <nav className={"nav-bar"}>
      <Link to={"/"} className={"nav-logo-text main-text-color"} >
      <p>
        { "{Y}" }
      </p>
      </Link>
      <ul className={"nav-links"}>
        <NavItem to={"#Home"}>Home</NavItem>
        <NavItem to={"#Intro"}>Intro</NavItem>
        <NavItem to={"#Features"}>Features</NavItem>
        <NavItem to={"#terminal"}>Terminal</NavItem>
      </ul>
    </nav>
  )
}

export default NavBar