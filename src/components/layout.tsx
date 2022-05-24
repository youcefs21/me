import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import Arrows from "./arrows";
import Terminal from "./terminal";


type LayoutProps = {
  pageTitle: string,
  pageDesc: string,
  children: JSX.Element
}

const Layout = ({ pageTitle, pageDesc, children }: LayoutProps) => {
  return (
    <div className={"container"}>
      <div className={"noise"}/>
      <title>{pageTitle}</title>
      <main>
        <NavBar className={"nav-bar"}/>
        <div className={"front-page"}>
          <div>
            <h1 className={"heading"}>{pageTitle}</h1>
            <h2 className={"sub-heading"}>{pageDesc}</h2>
          </div>
          <Arrows/>
        </div>
        <Terminal/>
        {children}
        <div id={'pageBottom'}></div>
      </main>
    </div>
  )
}

export default Layout