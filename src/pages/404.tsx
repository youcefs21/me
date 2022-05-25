import * as React from "react"
import Layout from "../components/layout";
import {Helmet} from "react-helmet";

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle={"404"} pageDesc={"ERROR 404 PAGE NOT FOUND"}>
    <div>
      <Helmet>
        <title>404</title>
        <meta name="description" content="page not found" />
      </Helmet>
    </div>
  </Layout>
  )
}

export default NotFoundPage
