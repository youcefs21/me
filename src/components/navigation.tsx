import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import '../styles/navigation.css'

const NavItem = ({to, children}: { to: string, children: string | JSX.Element }) => {
  return (
    <li className={"nav-link-item"}>
      <Link to={to} className={"nav-link-text"}>
        {children}
      </Link>
    </li>
  )
}

const NavBar = ({className}: {className: string}) => {
  return (
    <header>
      <nav className={className}>
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
          <NavItem to={"/contact"}>Contact</NavItem>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar