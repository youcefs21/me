import * as React from "react";
import '../styles/background.css'

const Background = ({children}: {children: JSX.Element}) => {
  return (
    <div className={"backdrop-curves"}>
      <svg style={{visibility: "hidden", position: "absolute"}}
           width="0"
           height="0"
           xmlns="http://www.w3.org/2000/svg"
           version="1.1">
        <defs>
          <filter id="fadeCornerRounder"><feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="fadeCornerRounder" />
            <feComposite in="SourceGraphic" in2="fadeCornerRounder" operator="atop"/>
          </filter>
        </defs>
      </svg>
      <div className={"backdrop background-color0"}>
        {children}
      </div>
    </div>
  )
}

export default Background