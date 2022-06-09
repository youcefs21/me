import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import {useState} from "react";
import {ThemeContext} from "../Contexts/ThemeContext";

type LayoutProps = {
  pageTitle: string,
  children: JSX.Element[]
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={"container"} id={theme}>
        <title>{pageTitle}</title>
        <NavBar/>
        <main className={"main main-background-color"}>
            {children}
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout