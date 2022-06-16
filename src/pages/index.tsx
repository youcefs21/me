import * as React from 'react'
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import Terminal from '../components/terminal';
import Arrows from "../components/arrows";
import Background from "../components/background";
import Binary from "../components/binary";
import {StaticImage} from "gatsby-plugin-image";


const FrontPage = () => {
  return (
    <Background className={"background-color-1"} zIndex={10}>
      <div id="Home" className={"page"}>
        <div>
          <h1 className={"heading main-text-color"}>
            Youcef
          </h1>
          <h2 className={"sub-heading main-text-color"}>
            I am a software engineer who loves learning new things and exploring new technologies
          </h2>
        </div>
        <Arrows/>
        <Binary/>
      </div>
    </Background>
  )
}

const IntroPage = () => {
  return (
    <Background className={"background-color-2"} zIndex={9}>
      <div id={"Intro"} className={'page'}>
        <h2 className={"main-text-color intro-heading"}>
          An Interactive Terminal Based Portfolio Experience
        </h2>
        <p className={"description-text secondary-text-color"}>
          At the bottom of this page, you’ll find a powerful custom built command line interface just like this one
        </p>
        <StaticImage src={"../images/white.png"} alt={"white space"} className={"main-demo"} imgClassName={"main-demo-img"}/>
        <Arrows/>
      </div>
    </Background>
  )
}

const FeaturesPage = () => {
  return (
    <Background className={"background-color-3"} zIndex={8}>
      <div id={"Features"} className={'page'}>
        <p>test</p>
      </div>
    </Background>
  )
}

const TerminalPage = () => {
  return (
    <>
      <h1 className={"heading main-text-color"}>The Terminal</h1>
      <Terminal/>
    </>
  )
}


const IndexPage = () => {
  return (
      <Layout pageTitle={"Youcef"}>
        <Helmet>
          <title>Youcef</title>
          <meta name="description" content="A Portfolio Page" color={"#21212F"}/>
        </Helmet>
        <FrontPage/>
        <IntroPage/>
        <FeaturesPage/>
        <TerminalPage/>
      </Layout>
  )
}

export default IndexPage
