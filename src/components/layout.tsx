import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import Arrows from "./arrows";


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
      <NavBar className={"nav-bar"}/>
      <main>
        <div className={"front-page"}>
          <div></div>
          <div>
            <h1 className={"heading"}>{pageTitle}</h1>
            <h2 className={"sub-heading"}>{pageDesc}</h2>
          </div>
          <Arrows/>
        </div>
        {children}
        <div id={'pageBottom'}></div>
      </main>
    </div>
  )
}

export default Layout