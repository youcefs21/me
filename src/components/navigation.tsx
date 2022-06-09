import {Link} from "gatsby";
import * as React from "react";
import '../styles/navigation.css'
import Switch from "react-switch";
import {ThemeContext} from "../Contexts/ThemeContext";

const NavItem = ({to, children}: { to: string, children: string | JSX.Element }) => {
  return (
    <li className={"nav-link-item"}>
      <a href={to} className={"nav-link-text main-text-color"}>
        {children}
      </a>
    </li>
  )
}

class ThemeSwitch extends React.Component<any, any> {
  static contextType = ThemeContext;

  constructor(props: any) {
    super(props);
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked: boolean) {
    const {setTheme} = this.context;
    setTheme(
      checked ? "light" : "dark"
    )

    this.setState({ checked });
  }

  render() {
    return (
        <Switch onChange={this.handleChange}
                checked={this.state.checked}
                onColor={"#FAD6A5"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
        />
    );
  }
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
      <ThemeSwitch/>
    </nav>
  )
}

export default NavBar