import * as React from 'react'
import Layout from "../components/layout";
import ContactMe from "../components/contactPage";

const AboutPage = () => {
  return (
    <Layout pageTitle={"Contact Me"} pageDesc={"Here is how you reach out to me"}>
      <ContactMe/>
    </Layout>
  )
}

export default AboutPage