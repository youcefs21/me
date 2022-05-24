import * as React from "react";
import '../styles/terminal.css'

const Terminal = () => {
  return (
    <div className={"box"}>
      <p>
        me@youcefs21.github.io:~$ <b className="cursor" id="cursor">█</b>
      </p>
    </div>
  )
}

export default Terminal