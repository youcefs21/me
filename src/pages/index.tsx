import * as React from 'react'
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";


const IndexPage = () => {
  return (
      <Layout pageTitle={"Hi, My Name is Youcef"}>
        <div>
          <p>
            I am software engineer who loves learning new things and exploring new technologies
          </p>
        </div>
      </Layout>
  )
}

export default IndexPage