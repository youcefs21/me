import * as React from "react";

const TextBoxStyles = {
  padding: 20
}

type TextBoxProps = {
  heading: string
}

export const TextBox = (props: TextBoxProps) => {
  return (
    <div style={TextBoxStyles}>
      <p>{props.heading}</p>
      <input/>
    </div>
  )
}