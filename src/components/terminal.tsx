import * as React from "react";
import '../styles/terminal.css'

const Terminal = () => {
  return (
    <div className={"box"}>
      <div className="terminal-text">
        <b className="terminal-cursor">█</b>
      </div>
    </div>
  )
}

export default Terminal