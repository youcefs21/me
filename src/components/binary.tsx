import * as React from "react";
import '../styles/binary.css'

const Binary = () => {
  return (
    <div>
      <p id={"binary1"} className={"binary-number"}>
        01100011 01100001 01101110 00100000 01111001 01101111 01110101
      </p>
      <p id={"binary2"} className={"binary-number"}>
        00100000 01110000 01101100 01100101 01100001 01110011 01100101
      </p>
      <p id={"binary3"} className={"binary-number"}>
        00100000 01101000 01101001 01110010 01100101 00100000 01101101
      </p>
      <p id={"binary4"} className={"binary-number"}>
        01100101 00101100 00100000 01110100 01101000 01100001 01101110
      </p>
      <p id={"binary5"} className={"binary-number"}>
        01101011 01110011 00100001 00100000 00111100 00110011 00100000
      </p>
    </div>
  )
}

export default Binary