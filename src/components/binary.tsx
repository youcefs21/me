import * as React from "react";
import '../styles/binary.css'

const Binary = () => {
  let bin = []

  const count = 20
  const minTime = 5
  const timeMlt = 10

  for (let i = 0; i < count; i++) {
    const binaryStyle = {
      left: (i * 100/count) + 'vw',
      animation: "linear " + (Math.random()*timeMlt + minTime) + "s infinite binary-down",
      animationDelay:  (-1 * Math.random()*timeMlt) + "s"
  }

    bin.push(
      <p className={"binary-number"} style={binaryStyle}>
        01100011 01100001 01101110 00100000 01111001 01101111 01110101
      </p>
    )

  }

  return (
    <div className={"binary-parent"}>
      {bin.map(function (value) {return value;})}
    </div>
  )
}

export default Binary