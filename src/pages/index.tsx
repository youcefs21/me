import * as React from 'react'
import Layout from "../components/layout";
import {Helmet} from "react-helmet";


const IndexPage = () => {
  return (
      <Layout pageTitle={"Youcef"} pageDesc={"I am software engineer who loves learning new things and exploring new technologies"}>
        <div>
          <Helmet>
            <title>Youcef</title>
            <meta name="description" content="portfolio page" />
          </Helmet>
        </div>
      </Layout>
  )
}

export default IndexPage