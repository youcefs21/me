import * as React from 'react'
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import Terminal from '../components/terminal';
import Arrows from "../components/arrows";
import Background from "../components/background";


const FrontPage = ({pageTitle, pageDesc}: {pageTitle: string, pageDesc: string}) => {
  return (
    <div className={"front-page"}>
      <div>
        <h1 className={"heading main-text-color"}>{pageTitle}</h1>
        <h2 className={"sub-heading main-text-color"}>{pageDesc}</h2>
      </div>
      <Arrows/>
    </div>
  )
}

const IntroPage = () => {
  return (
    <div>
      <FrontPage pageTitle={"Intro Page"} pageDesc={"cool intro"}/>
    </div>
  )
}

const FeaturesPage = () => {
  return (
    <div>
      <FrontPage pageTitle={"Features Page"} pageDesc={"look at all these features"}/>
    </div>
  )
}


const IndexPage = () => {
  return (
      <Layout pageTitle={"Youcef"} theme={"light"}>
        <Helmet>
          <title>Youcef</title>
          <meta name="description" content="A Portfolio Page" color={"#21212F"}/>
        </Helmet>
        <Background className={"background-color-1"} zIndex={10}>
          <FrontPage
            pageTitle={"Youcef"}
            pageDesc={"I am a software engineer who loves learning new things and exploring new technologies"}
          />
        </Background>
        <Background className={"background-color-2"} zIndex={9}>
          <IntroPage/>
        </Background>
        <Background className={"background-color-3"} zIndex={8}>
          <FeaturesPage/>
        </Background>
        <h1 className={"heading main-text-color"}>The Terminal</h1>
        <Terminal/>
      </Layout>
  )
}

export default IndexPage