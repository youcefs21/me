import {TextBox} from "./textbox";
import * as React from "react";

type CardsProps = {
  heading: string
}

const CardsStyle = {
  backgroundColor: "white"
}

const container = {
  display: "flex",
  // idk why tf I need to do this for wrap to work but ok
  flexWrap: "wrap" as "wrap",
  justifyContent: "space-around"
}

export const ItineraryBox = () => {
  return (
    <div style={CardsStyle}>
      <h1>Itinerary</h1>
      <div style={container}>
        <TextBox heading={"from"}/>
        <TextBox heading={"To"}/>
        <TextBox heading={"Departure date"}/>
      </div>
    </div>
  )
}