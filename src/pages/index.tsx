import * as React from 'react'
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import Terminal from '../components/terminal';


const IndexPage = () => {
  return (
      <Layout pageTitle={"Youcef"} pageDesc={"I am a software engineer who loves learning new things and exploring new technologies"}>
        <div>
          <Helmet>
            <title>Youcef</title>
            <meta name="description" content="A Portfolio Page" />
          </Helmet>
          <Terminal/>
        </div>
      </Layout>
  )
}

export default IndexPage