import * as React from 'react'
import Layout from "../components/layout";
import {ItineraryBox} from "../components/ItineraryBox";

const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
        <div>
          <p>My name is youcef,</p>
          <ItineraryBox/>
        </div>
      </Layout>
  )
}

export default IndexPage