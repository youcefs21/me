import * as React from "react";
import '../styles/binary.css'

const Binary = () => {
  let bin = []

  const count = 200
  const minTime = 5
  const timeMlt = 5
  const maxTime = minTime+timeMlt

  for (let i = 0; i < count; i++) {
    const binaryStyle = {
      left: (i * 100/count) + 'vw',
      animation: "linear " + (Math.random()*timeMlt + minTime) + "s infinite binary-down",
      animationDelay:  (-1 * Math.random()*maxTime) + "s"
  }

    bin.push(
      <p className={"binary-number"} style={binaryStyle}>
        01100011 01100001 01101110
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