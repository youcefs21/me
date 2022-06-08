import * as React from 'react'
import '../styles/layout.css'
import NavBar from "./navigation";
import Arrows from "./arrows";
import Background from "./background";


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
        <Background>
          <div className={"front-page"}>
            <div>
              <h1 className={"heading main-text-color"}>{pageTitle}</h1>
              <h2 className={"sub-heading main-text-color"}>{pageDesc}</h2>
            </div>
            <Arrows/>
          </div>
        </Background>
        {children}
        <div id={'pageBottom'} style={{padding:"1px"}}></div>
      </main>
    </div>
  )
}

export default Layout