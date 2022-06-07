import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import Arrows from "./arrows";


type LayoutProps = {
  pageTitle: string,
  pageDesc: string,
  children: JSX.Element,
  theme: string
}

const Layout = ({ pageTitle, pageDesc, children, theme }: LayoutProps) => {
  return (
    <div className={"container"} id={theme}>
      <title>{pageTitle}</title>
      <NavBar/>
      <main className={"main background-color1"}>
        <div className={"front-page"}>
          <div className={"backdrop background-color0"}/>
          <div>
            <h1 className={"heading main-text-color"}>{pageTitle}</h1>
            <h2 className={"sub-heading main-text-color"}>{pageDesc}</h2>
          </div>
          <Arrows/>
        </div>
        {children}
        <div id={'pageBottom'} style={{padding:"1px"}}></div>
      </main>
    </div>
  )
}

export default Layout