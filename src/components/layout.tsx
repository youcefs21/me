import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import Arrows from "./arrows";
import Background from "./background";


type LayoutProps = {
  pageTitle: string,
  children: JSX.Element[],
  theme: string
}

const Layout = ({ pageTitle, children, theme }: LayoutProps) => {
  return (
    <div className={"container"} id={theme}>
      <title>{pageTitle}</title>
      <NavBar/>
      <main className={"main main-background-color"}>
        {children}
        <div id={'pageBottom'} style={{padding:"1px"}}></div>
      </main>
    </div>
  )
}

export default Layout