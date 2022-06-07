import {Link} from "gatsby";
import * as React from "react";
import '../styles/navigation.css'

const NavItem = ({to, children}: { to: string, children: string | JSX.Element }) => {
  return (
    <li className={"nav-link-item"}>
      <Link to={to} className={"nav-link-text main-text-color"}>
        {children}
      </Link>
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
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/contact"}>Contact</NavItem>
      </ul>
    </nav>
  )
}

export default NavBar