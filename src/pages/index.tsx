import * as React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout";


type CardsProps = {
  heading: string
}

const Cards = (props: CardsProps) => {
  return (
    <div style={{backgroundColor: "white", padding: 20}}>
      <h1>{props.heading}</h1>
      <TextBox heading={"Heading1"}/>
      <TextBox heading={"Heading1"}/>
      <TextBox heading={"Heading1"}/>

    </div>
  )
}

export const TextBoxStyles = {
  padding: 10
}

type TextBoxProps = {
  heading: string
}

const TextBox = (props: TextBoxProps) => {
  return (
    <div style={TextBoxStyles}>
      <h4>{props.heading}</h4>
      <input/>
    </div>
  )
}


const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
        <div>
          <p>My name is youcef,</p>
          <Cards heading={"Yes"}/>
        </div>
      </Layout>
  )
}

export default IndexPage
